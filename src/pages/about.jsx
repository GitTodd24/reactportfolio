function About(){
    return <>
        <h1>About</h1>
        <div id="about" class="parallax-window" data-parallax="scroll" data-image-src="img/antique-cafe-bg-03.jpg">
        <div class="container mx-auto tm-container py-24 sm:py-48">
            <div class="tm-item-container sm:ml-auto sm:mr-12 mx-auto sm:px-0 px-4">
                <div class="bg-white bg-opacity-80 p-12 pb-14 rounded-xl mb-5">
                    <h2 class="mb-6 tm-text-green text-4xl font-medium">About Asante</h2>
                    <p class="mb-6 text-base leading-8">
                        This page gives a snapshot of some of my previous coding projects. Languages used include Node.js, Express, React, MangoDB (MERN), SQL, and Javascript. Templates used include Tailwind CSS and Bootstrap CSS. You may modify these pages for your own web projects.
                  </p>
                    <p class="text-base leading-8">
                        If you wish to <a rel="nofollow" href="https://www.tooplate.com/contact" target="_parent">support us</a>, please make a little donation via PayPal. That would be
                    very helpful. Another way is to tell your friends about Tooplate website. Thank you. </p>
                </div>
                <a href="#contact" class="inline-block tm-bg-green transition text-white text-xl pt-3 pb-4 px-8 rounded-md">
                    <i class="far fa-comments mr-4"></i>
                    Contact
                </a>
            </div>           
        </div>        
    </div>
        </>
}

export default About