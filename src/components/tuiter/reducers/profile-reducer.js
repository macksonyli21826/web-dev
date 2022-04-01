const profileData = {
    firstName: 'Yuanqiao',
    lastName: 'Li',
    handle: 'macksonyli',
    profilePicture: 'li.png',
    bannerPicture: 'banner.png',
    bio: 'Graduate student in Northeastern University',
    website: 'mywebsite.com',
    location: 'Boston, MA',
    dateOfBirth: '2/14/1997',
    dateJoined: '3/2022',
    followingCount: 312,
    followersCount: 180
}
const profileReducer = () => {
    return profileData;
}
export default profileReducer;