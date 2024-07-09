import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { PrimaryButton } from '../../components';
import { PlusIcon } from '../../assets/icons/PlusIcon';
import { schedules } from '../../api';
import { Schedule, Service } from '../../types';
import { colors } from '../../theme/theme';
import useStore from '../../store/store';

const AddAppoinment = () => {
  const [scheduleSelected, setScheduleSelected] = useState<Schedule | null>(null)
  const [servicesSelected, setServicesSelected] = useState<Service[]>([])
  const [dates, setDates] = useState<Date[]>([])
  const [selectDate, setSelectDate] = useState<Date>()

  console.log({ dates })

  const services = useStore(state => state.services)

  useEffect(() => {
    const startDate = new Date(); // Start date
    const numberOfDays = 14;

    const consecutiveDays = getConsecutiveDates(startDate, numberOfDays)
  
    setDates(consecutiveDays)
  }, [])

  function getConsecutiveDates(startDate: Date, numberOfDays: number) {
    var datesArray = [];

    var currentDate = new Date(startDate);
    for (var i = 0; i < numberOfDays; i++) {
      datesArray.push( new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
  
    return datesArray;
  }

  const handleSelectService = (service: Service) => {
    if (servicesSelected.includes(service)) {
      const newServices = servicesSelected.filter(item => item.id !== service.id)
      setServicesSelected(newServices)
    } else {
      setServicesSelected([
        ...servicesSelected,
        service
      ])
    }
  }

  const handleCreateAppointment = () => {

    if (selectDate && scheduleSelected) {
      const date = selectDate
      const hour = scheduleSelected.hour.split(':')
      date.setHours(Number(hour[0]), 0, 0); 
      const services = servicesSelected.map(service => service.id)

      console.log({ date, hour, services })
    }
  }

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['50%', '85%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <>
      <TouchableOpacity onPress={handlePresentModalPress}>
        <PlusIcon />
      </TouchableOpacity>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ height: 150 }}>
              <Text style={styles.title}>Select Day</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {dates.map((date) => {
                  const month = date.toLocaleString('default', { month: 'short' })
                  const day = date.getDate();
                  return (
                    <TouchableOpacity
                      style={[styles.dateButton, { backgroundColor: selectDate === date ? colors.primary : colors.backgroundInput }]}
                      onPress={() => setSelectDate(date)}
                    >
                      <Text style={[styles.dateButtonText, { color: selectDate === date ? 'white' : colors.dark }]}>
                        {day}
                      </Text>
                      <Text style={[{ color: selectDate === date ? 'white' : colors.dark }]}>
                        {month} 
                      </Text>
                    </TouchableOpacity>
                  )
                })}
              </ScrollView>
            </View>

            <Text style={styles.title}>Select hour</Text>
            <View style={styles.schedules}>
              {schedules.map((schedule: Schedule) => (
                <TouchableOpacity
                  key={schedule.id}
                  onPress={() => setScheduleSelected(schedule)}
                  style={[
                    styles.scheduleButton,
                    {
                      backgroundColor: scheduleSelected && scheduleSelected.id === schedule.id ? colors.primary : 'white'
                    }
                  ]}
                >
                  <Text
                    style={[
                      styles.scheduleButtonText,
                      {
                        color: scheduleSelected && scheduleSelected.id === schedule.id ? 'white' : colors.dark
                      }
                    ]}
                  >
                    {schedule.hour}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.title}>Select Services</Text>
            <View style={styles.services}>
              {services.map((service: Service) => (
                <TouchableOpacity
                  key={service.id}
                  onPress={() => handleSelectService(service)}
                  style={[
                    styles.serviceButton,
                    {
                      backgroundColor: servicesSelected.includes(service) ? colors.primary : 'white'
                    }
                  ]}
                >
                  <Text
                    style={[
                      styles.scheduleButtonText,
                      {
                        color: servicesSelected.includes(service) ? 'white' : colors.dark
                      }
                    ]}
                  >
                    {service.desc}
                  </Text>
                  <Text
                    style={[
                      styles.pointsText,
                      {
                        color: servicesSelected.includes(service) ? 'white' : colors.textSecondary
                      }
                    ]}
                  >
                    Points: {service.points}
                  </Text>
                  
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.buttons}>
              <PrimaryButton onPress={handleCreateAppointment} text="Reservar" disabled={false} />
            </View>
          </ScrollView>

          
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-start',
    marginBottom: 60,
  },
  schedules: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 40,
  },
  scheduleButton: {
    height: 40,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },
  dateButton: {
    width: 60,
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    marginRight: 12,
    marginBottom: 20,
  },
  dateButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  scheduleButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  services: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  serviceButton: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 8,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.backgroundInput,
    gap: 4,
  },
  pointsText: {
    fontSize: 12,
  },
  buttons: {
    width: '100%',
    marginTop: 40,
  }
});

export default AddAppoinment;