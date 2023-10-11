import responseHandler from '../handlers/response.handler.js';
import tvmazeApi from '../tvmaze/tvmaze.api.js';

const getPersonDetail = async (req, res) => {
  try {
    const { personId } = req.params;

    const person = await tvmazeApi.personDetail({ personId });

    responseHandler.ok(res, person);
  } catch {
    responseHandler.error(res);
  }
};

export default { getPersonDetail };
