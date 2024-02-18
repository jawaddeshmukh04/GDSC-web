import React, { useState } from 'react';

function Cards() {
  const [startIndex, setStartIndex] = useState(0);

  const cardsData = [
    { id: 1, title: 'Jawad Deshmukh', rating: 5, content: 'GDSC AIKTC a vibrant community of tech enthusiasts, offering insightful workshops and events that seamlessly blend innovation with skill development, making it a standout hub for aspiring tech professionals', socialLinks: ['facebook', 'twitter'] , instagram:'https://www.instagram.com/__jawad__04/?next=%2F '},
    { id: 2, title: 'Asif Shaikh', rating: 5, content: 'GDSC AIKTC impresses with its commitment to cutting-edge technologies, providing a dynamic platform for students to explore and excel in the ever-evolving world of digital innovation.',instagram:'https://www.instagram.com/31_asif_00/'},
    { id: 3, title: 'Farhaan Sheikh', rating: 5, content: 'Exceptional mentorship, engaging projects, and a collaborative atmosphere define GDSC AIKTC as a premier space where students can cultivate their passion for technology, ensuring a transformative learning experien',instagram:'https://www.instagram.com/farhaan___sheikh/'},
    { id: 4, title: 'Card 4', rating: 5, content: 'Content for Card 4',instagram:'' },
    { id: 5, title: 'Card 5', rating: 5, content: 'Content for Card 5',instagram:''},
    { id: 6, title: 'Card 6', rating: 5, content: 'Content for Card 6',instagram:'' },
  ];

  const handleNext = () => {
    if (startIndex + 3 < cardsData.length) {
      setStartIndex(startIndex + 3);
    }
  };

  const handlePrev = () => {
    if (startIndex - 3 >= 0) {
      setStartIndex(startIndex - 3);
    }
  };

  return (
    <div className='px-10 bg-black m-0'>
      <div className="flex justify-end mb-2">
        <a
          className="inline-block rounded-full border border-gray-600 bg-gray-900 p-3 text-white hover:bg-gray-500 hover:text-gray-600 focus:outline-none focus:ring active:text-gray-500 mr-2 mt-2"
          onClick={handlePrev}
        >
          <span className="sr-only">Download</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </a>
        <a
          className="inline-block rounded-full border border-gray-600 bg-gray-900 p-3 text-white hover:bg-gray-600 hover:text-blue-600 focus:outline-none focus:ring active:text-gray-500 mr-2 mt-2" onClick={handleNext}
        >
          <span className="sr-only">Download</span>

          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        {cardsData.slice(startIndex, startIndex + 3).map((card) => (
          <div key={card.id} className="bg-gray-200 p-4 m-2 flex-1  bg-gray-900 text-white">
            <div className="top-2 right-2 grid grid-cols-2">
            <h2 className="text-lg font-bold text-white flex">{card.title}</h2>        
            <div className="flex justify-content-end align-items-center  bg-white rounded-full">
              <div className="div">
                
              </div>
      <div className="fb"><a href={card.instagram}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
        <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
      </svg>
      </a>
      </div>
      <div className="insta"><a href={card.instagram}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
<path d="M 15 2 C 7.832 2 2 7.832 2 15 C 2 22.168 7.832 28 15 28 C 22.168 28 28 22.168 28 15 C 28 7.832 22.168 2 15 2 z M 11.666016 6 L 18.332031 6 C 21.457031 6 24 8.5420156 24 11.666016 L 24 18.332031 C 24 21.457031 21.457984 24 18.333984 24 L 11.667969 24 C 8.5429688 24 6 21.457984 6 18.333984 L 6 11.667969 C 6 8.5429688 8.5420156 6 11.666016 6 z M 11.666016 8 C 9.6450156 8 8 9.6459688 8 11.667969 L 8 18.333984 C 8 20.354984 9.6459688 22 11.667969 22 L 18.333984 22 C 20.354984 22 22 20.354031 22 18.332031 L 22 11.666016 C 22 9.6450156 20.354031 8 18.332031 8 L 11.666016 8 z M 19.667969 9.6660156 C 20.035969 9.6660156 20.333984 9.9640312 20.333984 10.332031 C 20.333984 10.700031 20.035969 11 19.667969 11 C 19.299969 11 19 10.700031 19 10.332031 C 19 9.9640312 19.299969 9.6660156 19.667969 9.6660156 z M 15 10 C 17.757 10 20 12.243 20 15 C 20 17.757 17.757 20 15 20 C 12.243 20 10 17.757 10 15 C 10 12.243 12.243 10 15 10 z M 15 12 A 3 3 0 0 0 15 18 A 3 3 0 0 0 15 12 z"></path>
</svg>
      </a>
      </div>
      <div className="linkedin"><a href='https://www.instagram.com/__jawad__04/?next=%2F'>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
<path d="M25,2C12.3,2,2,12.3,2,25s10.3,23,23,23s23-10.3,23-23S37.7,2,25,2z M19,35c0,0.5-0.5,1-1,1h-4c-0.5,0-1-0.5-1-1V20 c0-0.5,0.5-1,1-1h4c0.5,0,1,0.5,1,1V35z M16,18c-1.6,0-3-1.4-3-3s1.4-3,3-3s3,1.4,3,3S17.6,18,16,18z M38,35c0,0.5-0.5,1-1,1h-4 c-0.5,0-1-0.5-1-1v-7.5c0-1.4-1.1-2.5-2.5-2.5S27,26.1,27,27.5V35c0,0.5-0.5,1-1,1h-4c-0.5,0-1-0.5-1-1V20c0-0.5,0.5-1,1-1h4 c0.5,0,1,0.4,1,1c1.1-0.6,2.2-1,3.5-1c4.1,0,7.5,3.4,7.5,7.5V35z"></path>
</svg>
      </a>
      </div>
            </div>
    </div>
            <div className="flex items-center mt-2">
              <span className="mr-2">Ratings: {card.rating}</span>
              {[...Array(Math.floor(card.rating))].map((_, index) => (
                <svg key={index} className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 1l2.56 5.333L18 7.667l-4 3.9.947 5.797L10 15.334l-4.947 2.03L6 11.566l-4-3.9 5.44-.334L10 1z"
                    clipRule="evenodd"
                  />
                </svg>
                
              ))}
            </div>
            <p className='text-left mt-2'>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
