export default function BookList() {
   let pageTitle = "Cool Books";
   let book1 = "https://th.bing.com/th/id/OIP.IjXSQgpeek65QTvREX852QHaLL?w=115&h=183&c=7&r=0&o=5&pid=1.7";
   let book2 = "https://th.bing.com/th/id/OIP.6QntvTCqAdctdkdOxiy-IQHaKi?w=113&h=180&c=7&r=0&o=5&pid=1.7";
   let book3 = "https://th.bing.com/th/id/OIP.Ah1xWb-FeGsi4hhAlsFPzQHaLd?w=128&h=174&c=7&r=0&o=5&pid=1.7";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Dune" />
         <img src={book2} alt="The Diary of a Teenage Girl" />
         <img src={book3} alt="Giant Days" />
      </div>      
   );
}
