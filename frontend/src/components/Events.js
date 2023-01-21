import React, { useEffect } from 'react'

export const Events = (props) => {
  const imgUrl = "https://upload.wikimedia.org/wikipedia/commons/6/68/Britain_Needs_You_at_Once_-_WWI_recruitment_poster_-_Parliamentary_Recruiting_Committee_Poster_No._108.jpg";
  useEffect(() => {
    props.setProgress(100);
  }, [])
  
  return (
    <>
    <section id='upcomingEvents' className='mt-3 mx-4'>
      <h1 className='text-blue-900 font-semibold text-3xl'>Upcoming Events :</h1>
      <br/>
      <div className='upcomingEventCard mx-3 flex flex-col md:flex-row gap-6 content-center justify-center' style={{border: '2px solid red'}}>
          <img src={imgUrl} alt="" className='w-full md:w-[20vw] h-[30vh] object-contain min-h-[150px]'/>
          <div className='flex flex-col w-full md:w-[70vw] justify-center content-center'>
            <h1 >This is Event Name </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur deleniti beatae dolorem suscipit aliquid quos culpa excepturi ipsa dolor inventore unde voluptate est exercitationem recusandae a corrupti voluptatibus, illo voluptatem? Perspiciatis dolor nostrum assumenda nesciunt illo molestiae cum odio veritatis consectetur non, necessitatibus quia eius numquam at saepe fuga, distinctio ut sapiente id dolores exercitationem provident minus placeat in. Blanditiis, ad. Quae totam, inventore ea quos earum odit reprehenderit, vitae deleniti ducimus consectetur unde alias consequatur velit dolorum exercitationem asperiores ad iure esse maiores! Perferendis quis iusto assumenda animi, quod autem consequuntur ipsam voluptatum ut quasi, ipsum harum. Officiis, inventore.</p>

          </div>
      </div>
    </section>
    <section id='pastEvents'>

    </section>
    </>
  )
}
