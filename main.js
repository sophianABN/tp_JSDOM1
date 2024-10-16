import './style.css'

const userData = {
  name: 'John SEAGAL',
  email: 'john.doe@example.com',
  age: 25,
  dob: '08/02/1999',
  active: true,
  img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
};

// Fonction pour créer et afficher le profil utilisateur
function afficherProfilUtilisateur() {
  const userProfile = document.querySelector('.userProfile');
  
  const profileHTML = `
    <div class="profile-card">
      <h2>Profil Utilisateur</h2>
      <img src="${userData.img}" alt="${userData.name}" style="max-width: 200px;">
      <p><strong>Nom:</strong> ${userData.name}</p>
      <p><strong>Email:</strong> ${userData.email}</p>
      <p><strong>Âge:</strong> ${userData.age}</p>
      <p><strong>Date de naissance:</strong> ${userData.dob}</p>
      <p><strong>Statut:</strong> <span class="status ${userData.active ? 'status-active' : 'status-inactive'}">${userData.active ? 'Actif' : 'Inactif'}</span></p>
    </div>
  `;
  
  userProfile.innerHTML = profileHTML;
}

afficherProfilUtilisateur();