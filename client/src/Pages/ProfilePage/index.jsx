import Title from '../../Components/atoms/Title';
import { put, upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';
import { API_URL, LOCAL_STORAGE_TOKEN_NAME } from '../../../config';
import privateClient from '../../api/client/private.client';
import userApi from '../../api/modules/user.api';
import axios from 'axios';

const Index = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [file, setFile] = useState();
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState(null);

  const [userName, setUserName] = useState('');

  const handleFileChange = e => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  // login: async ({ email, password }) => {
  //   try {
  //     const response = await publicClient.post(userEndpoints.login, {
  //       email,
  //       password,
  //     });

  //     return { response };
  //   } catch (err) {
  //     return { err };
  //   }
  // },

  const uploadSubmit = async event => {
    event.preventDefault();
    const formData = new FormData();

    const file = inputFileRef.current.files[0];
    formData.append('avatar', file);

    // axios
    //   .post(`${API_URL}/user/avatar-upload`, formData, {
    //     headers: {
    //       'Content-type': 'multipart/form-data',
    //     },
    //   })
    //   .then(res => {
    //     console.log('res', res);
    //   });

    const response = await privateClient.post(
      `${API_URL}/user/avatar-upload`,
      {
        username: 'test',
        email: 'test',
        avatar: file,
        ...formData,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    console.log('response', response);

    // const newBlob = await put(file.name, file, {
    //   access: 'public',
    //   handleUploadUrl: `${API_URL}/user/avatar-upload`,
    // });

    // setBlob(newBlob);
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
          <p className="mb-3">Change user info</p>

          <form className="flex flex-col space-y-4" onSubmit={uploadSubmit}>
            <div>
              <input
                type="text"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                className="px-4 py-2 border"
                placeholder="name"
              />
            </div>

            <div>
              <input
                type="text"
                value={user.email}
                onChange={() => {}}
                className="px-4 py-2 border"
                placeholder="email"
              />
            </div>

            <div>
              <input name="file" ref={inputFileRef} type="file" required />
            </div>

            <button className="px-2 py-1 border" type="submit">
              Update
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
