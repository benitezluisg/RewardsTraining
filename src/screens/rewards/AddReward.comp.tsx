import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { PrimaryButton, Input } from '../../components';
import { PlusIcon } from '../../assets/icons/PlusIcon';
import { schedules, services } from '../../api';
import { Schedule, Service } from '../../types';
import { colors } from '../../theme/theme';

const AddReward = () => {
  const [points, setPoints] = useState('')
  const [serviceSelected, setServiceSelected] = useState<Service>()

  const handleSelectService = (service: Service) => setServiceSelected(service)

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
          <View>
            <Text style={styles.title}>Create Reward</Text>

            <Input
              label="Points"
              value={points}
              onChangeText={(value) => setPoints(value)}
            />

            <Text style={styles.titleServices}>Select Services</Text>
            <View style={styles.services}>
              {services.map((service: Service) => (
                <TouchableOpacity
                  key={service.id}
                  onPress={() => handleSelectService(service)}
                  style={[
                    styles.serviceButton,
                    {
                      backgroundColor: serviceSelected?.id === service.id ? colors.primary : 'white'
                    }
                  ]}
                >
                  <Text
                    style={[
                      styles.serviceText,
                      {
                        color: serviceSelected?.id === service.id ? 'white' : colors.dark
                      }
                    ]}
                  >
                    {service.service}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.buttons}>
            <PrimaryButton onPress={() => {}} text="Guardar" disabled={false} />
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    marginBottom: 60,
  },
  buttons: {
    width: '100%',
    marginTop: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },
  titleServices: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  serviceText: {
    fontSize: 16,
    fontWeight: '600',
  },
  services: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  serviceButton: {
    height: 48,
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
});

export default AddReward;