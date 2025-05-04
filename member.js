function skillsMember() {
  return {
    name: 'member',
    description: 'Member',
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the member',
      },
      name: {
        type: 'string',
        description: 'Name of the member',
      },
      email: {
        type: 'string',
        description: 'Email of the member',
      },
      phoneNumber: {
        type: 'string',
        description: 'Phone number of the member',
      },
    },
  };
}