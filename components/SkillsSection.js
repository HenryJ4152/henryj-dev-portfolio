import React from 'react'

function SkillsSection() {
  return (
    <section className=' pt-12 pl-12  w-full max-h-screen h-screen text-3xl font-bold'>
      <h1 className=' '>My Skills</h1>
      <div className=' flex mt-10'>

        <div className=' flex flex-col text-xl '>
          <p>Javascript</p>
          <p>CSS</p>
          <p>HTML</p>
          <p>NodeJS</p>
          <p>Git</p>
          <p>ReactJS</p>
          <p>NextJS</p>
          <p>MongoDB</p>
          <p>REST</p>
          <p>npm</p>
          <p>SASS</p>
          <p>JSON</p>
        </div>

        <div className=' grid grid-cols-6 ml-12 mr-10 flex-1'>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
          </div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="" />
          </div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" alt="" />
          </div>
          <div>
            <img src="https://ih1.redbubble.net/image.1637717834.1604/pp,840x830-pad,1000x1000,f8f8f8.u1.jpg" alt="" />
          </div>
          <div>
            <img src="https://git-scm.com/images/logos/logomark-black@2x.png" alt="" />
          </div>
          <div>
            <img src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png" alt="" />
          </div>
          <div>
            <img src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs" alt="" />
          </div>
          <div>
            <img src="https://w7.pngwing.com/pngs/429/921/png-transparent-mongodb-plain-wordmark-logo-icon.png" alt="" />
          </div>
          <div>
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png" alt="" />
          </div>
          <div>
            <img src="https://authy.com/wp-content/uploads/npm-logo.png" alt="" />
          </div>
          <div>
            <img src="https://e7.pngegg.com/pngimages/72/936/png-clipart-sass-cascading-style-sheets-preprocessor-less-postcss-meng-miscellaneous-text-thumbnail.png" alt="" />
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKCXSQQgSHs9CwUoHkOkKepWF0ohqlwsT5EQ&usqp=CAU" alt="" />
          </div>
        </div>

      </div>


    </section>
  )
}

export default SkillsSection