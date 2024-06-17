import React from 'react';
import ProfileForm from '../components/ProfileForm';

function ProfilePage() {
  const handleSubmit = (data) => {
    console.log('Submitted profile data:', data);
    // Implement logic to submit profile data to backend (e.g., via fetch or axios)
  };

  return (
    <div className="profile-page">
      <h1>Ton espace </h1>
      <ProfileForm onSubmit={handleSubmit} />
    </div>
  );
}

export default ProfilePage;
