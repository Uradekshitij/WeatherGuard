import { useState } from 'react';
import api from '../api/axios';

export default function Invite() {
const [name, setName] =
useState('');

const [email, setEmail] =
useState('');

const handleSubmit = async (
e: React.FormEvent,
) => {
e.preventDefault();


try {
  await api.post(
    '/users/request-invite',
    {
      name,
      email,
    },
  );

  alert(
    'Invite Request Submitted',
  );

  setName('');
  setEmail('');
} catch {
  alert('Error');
}


};

return (
<div
style={{
padding: '40px',
}}
> <h1>Request Invite</h1>

  <form onSubmit={handleSubmit}>
    <input
      placeholder="Name"
      value={name}
      onChange={(e) =>
        setName(
          e.target.value,
        )
      }
    />

    <br />
    <br />

    <input
      placeholder="Email"
      value={email}
      onChange={(e) =>
        setEmail(
          e.target.value,
        )
      }
    />

    <br />
    <br />

    <button type="submit">
      Request Invite
    </button>
  </form>
</div>


);
}
