import userNetwork from '../../services/userNetwork';

export const deleteUser = (id) => userNetwork.delete(`${id}`);

export const get = () => userNetwork.get();

export const edit = (id, values) => userNetwork.patch(id, values);
