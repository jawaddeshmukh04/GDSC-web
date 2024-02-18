import React from 'react';

function Faqs() {
    return (
        <div className="bg-black">
            <p className='bg-black text-gray-400 m-0 pl-10 text-left'>FAQ'S</p>
            <h3 className='bg-black text-white m-0 pl-10 text-left pb-10'>FREQUENTLY ASKED QUESTIONS </h3>
            <div className="px-20 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <div className="space-y-4">
                    <FAQQuestion question="Who can become a member?" answer="The Club is open to any student from novice developers who are just starting to advanced developers who want to further their skills." />
                    <FAQQuestion question="Can non-technical students join GDSC AIKTC?" answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!" />
                    <FAQQuestion question="What benefits do GDSC AIKTC members receive?" answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!" />
                    <FAQQuestion question="How can I stay updated on GDSC AIKTC events and activities?" answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!" />
                </div>
                <div className="space-y-4">
                    <FAQQuestion question="Who should I reach out to if I have any question?" answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!" />
                    <FAQQuestion question="What should I carry while attending workshop?" answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!" />
                    <FAQQuestion question="How can I contact GDSC AIKTC for further inquiries?" answer="For further inquiries, you can contact GDSC AIKTC through the following channels: dscaiktc@gmail.com, GDSCAIKTC" />
                    <FAQQuestion question="Lorem ipsum dolor sit amet?" answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!" />
                </div>
            </div>
        </div>
    );
}

function FAQQuestion({ question, answer }) {
    return (
        <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-gray-900 dark:text-white">
                <h2 className="text-xl">{question}</h2>
                <svg className="h-7 w-7 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </summary>
            <p className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-200 font-bold text-xl">{answer}</p>
        </details>
    );
}

export default Faqs;
