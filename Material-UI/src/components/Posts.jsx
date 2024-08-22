import SingleCard from "./SingleCard"

function Posts() {

    const CardContent = [
        {
            userLogo: "K",
            userLogoColor: "yellow",
            title: "In my own World",
            date: "August 11, 2004",
            img: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            imgDesc: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
          },
          {
            userLogo: "M",
            userLogoColor: "green",
            title: "Exploring Nature",
            date: "October 25, 2021",
            img: "https://images.pexels.com/photos/12421356/pexels-photo-12421356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            imgDesc: "Enjoying the beauty of nature and capturing moments during a hike in the mountains."
          },
          {
            userLogo: "B",
            userLogoColor: "blue",
            title: "City Lights",
            date: "December 5, 2022",
            img: "https://images.pexels.com/photos/4052714/pexels-photo-4052714.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            imgDesc: "Admiring the vibrant city lights from a rooftop terrace on a clear night."
          },
          {
            userLogo: "S",
            userLogoColor: "orange",
            title: "Sunset Serenity",
            date: "June 18, 2023",
            img: "https://images.pexels.com/photos/5313211/pexels-photo-5313211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            imgDesc: "Relaxing by the beach and enjoying the peacefulness of a beautiful sunset."
          },
          {
            userLogo: "G",
            userLogoColor: "purple",
            title: "Gastronomic Delight",
            date: "February 9, 2024",
            img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            imgDesc: "Indulging in a delightful culinary experience with a plate full of delicious dishes."
          }
        ];
  return (
    <>
    <SingleCard CardInfo={CardContent}/>
    </> 
  )
}

export default Posts