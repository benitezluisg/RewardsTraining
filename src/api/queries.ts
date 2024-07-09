
export const queryLogin = ({ user, password }: { user: string, password: string }) => {
  return ({
    query: `
      mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
        }
      }
    `,
    variables: {
      email: user,
      password: password
    },
  })
} 

export const queryCreateAppointment = ({ userId, userServices }) => {
  return ({
    query: `
      mutation ($dto: appointmentDto!) {
        addAppointment(dto: $dto) {
          id,
          userId,
          date,
          services {
            id,
            desc,
            points
          }
        }
      }
    `,
    variables: {
      dto: {
        "date": new Date().toISOString(),
        "userId": userId,
        "userServices": userServices,
      }
    },
  })
}

export const queryServices = {
  query: `
    query {
      services {
        desc
        id
        points
      }
    }
  `
}

export const queryRewards = {
  query: `
    query {
      rewards {
        desc
        id
        points
      }
    }
  `
}

export const queryAppointments = { 
  query: `
    query {
      appointments {
        date
        id
        services {
          desc
          id
          points
        }
        user {
          name
          id
          points
        }
        userId
      }
    }
  `
}
