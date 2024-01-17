import Title from '../../Components/atoms/Title';
import { useState, useRef } from 'react';
import userApi from '../../api/modules/user.api';
import toast from 'react-hot-toast';

import LoadingDots from '../../Components/atoms/LoadingDots';

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState(null);
  const [userName, setUserName] = useState('');

  const uploadSubmit = async event => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    const file = inputFileRef.current.files[0];

    formData.append('userId', user.id);
    formData.append('userName', userName);
    formData.append('avatar', file);

    const { response, err } = await userApi.updateInfo(formData);
    console.log('response', response);

    if (response) {
      setLoading(false);

      localStorage.setItem('user', JSON.stringify(response));
      toast.success('success');
      location.reload();
    }

    if (err) {
      setLoading(false);
      toast.error(err.response.data.message || err.message);
    }
  };

  return (
    <section className="container mb-20">
      <Title>Profile</Title>

      <div className="grid grid-cols-2 gap-6">
        <ul className="space-y-2">
          <li>
            <strong className="font-bold">Name</strong>:{' '}
            <span>{user.username}</span>
          </li>
          <li>
            <strong className="font-bold">Email</strong>:{' '}
            <span>{user.email}</span>
          </li>
        </ul>

        <div>
          <h2 className="mb-3 text-lg font-medium">Change user info</h2>

          <form
            className="flex flex-col items-start space-y-4"
            onSubmit={uploadSubmit}
          >
            <div className="flex items-center gap-2">
              <label>Usename</label>
              <input
                required
                type="text"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                className="px-4 py-2 border"
                placeholder="name"
              />
            </div>

            <div className="flex items-center gap-2">
              <label>Avatar</label>

              <input name="file" ref={inputFileRef} type="file" required />
            </div>

            <button
              className="px-2 py-1 border justify-center items-center flex min-w-[100px] min-h-[34px]"
              type="submit"
            >
              {loading ? <LoadingDots color="bg-slate-600" /> : 'Update'}
            </button>
          </form>

          <div className="">
            {blob && (
              <div>
                Blob url: <a href={blob.url}>{blob.url}</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
