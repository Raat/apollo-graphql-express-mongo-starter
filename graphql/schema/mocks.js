import casual from 'casual';

const mocks = {
  User: () => ({
    id: casual.id,
    firstName: casual.first_name,
    lastName: casual.last_name,
  }),
};

export default mocks;
