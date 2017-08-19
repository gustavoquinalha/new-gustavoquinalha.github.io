<template>
  <div class="margin size esp container center column">
    <!-- <div class="apresentation">
      <h1>Hello, my name is Gustavo...</h1>
      <p>I’m a passionate multidisciplinary designer with 10 years of commercial experience. I like to take a human approach to design, making sure my creations are lead by UX research. I have experience in designing; websites, web applications, and iOS
        design. I’ve worked with agencies, startups, and large organisations.</p>
    </div> -->

    <!-- <div class="social container wrap align-center justify-center">
      <div class="social-item" v-for="social in mysocial">
        <div v-on:mouseover="perfilSocial = social.name">
          <img :src="require('@/assets/images/social/' + social.image)" width="80">
        </div>
      </div>
    </div> -->

    <div class="social container wrap align-center justify-center">
      <div class="social-item">
        <div class="hoversvg" v-on:mouseover="perfilSocial = 'facebook'" v-on:mouseout="perfilSocial = ''">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80" height="80" viewBox="0 0 90 90" style="enable-background:new 0 0 90 90;" xml:space="preserve">
          <g><path class="facebook" id="Facebook__x28_alt_x29_" d="M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998
          		C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41
          		h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z"/></g></svg>
        </div>
      </div>
      <div class="social-item">
        <div class="hoversvg" v-on:mouseover="perfilSocial = 'github'" v-on:mouseout="perfilSocial = ''">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             width="80" height="80" viewBox="0 0 438.549 438.549" style="enable-background:new 0 0 438.549 438.549;"
             xml:space="preserve">
          <g>
            <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
              c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
              c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
              c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
              c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
              c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
              c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
              c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
              c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
              c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
              c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
              c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
              c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
              c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
              c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
              c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
              c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
              c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
              c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
              C438.536,184.851,428.728,148.168,409.132,114.573z"/>
          </g>
          </svg>
        </div>
      </div>
      <div class="social-item">
        <div class="hoversvg" v-on:mouseover="perfilSocial = 'codepen'" v-on:mouseout="perfilSocial = ''">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512" width="80" height="80">
            <g>
              <polygon points="164,240.6 164,271.1 186.2,255.5  "/>
              <polygon points="300.4,241.8 336.2,217.7 266.6,169.3 266.8,217.4  "/>
              <polygon points="242,216.3 242,169.3 173.3,217.4 207.65,240.4  "/>
              <path d="m374,0h-236c-76.2,0-138,61.8-138,138v236c0,76.2 61.8,138 138,138h236c76.2,0 138-61.8 138-138v-236c0-76.2-61.8-138-138-138zm-3,291.5c0,6.2-3.3,12.1-8.5,15.5l-97.1,64.1c-6.2,4.1-14.35,4.1-20.55,0l-95.325-62.9c-5.2-3.4-8.525-9.3-8.525-15.5v-70.2c0-6.1 3.2-11.8 8.2-15.3l93.6-65.2c6.3-4.4 14.65-4.5 20.95-0.3l98.725,65.3c5.2,3.4 8.525,9.3 8.525,15.5v69z"/>
              <polygon points="267,293.4 267,340.9 336.05,294.7 300.275,271.2  "/>
              <polygon points="243,293.5 208.15,270.2 173.625,294.4 243,340.833  "/>
              <polygon points="346,271.9 346,240.6 322.4,256.4  "/>
              <polygon points="252.1,239.4 229.6,255.1 255.1,272.2 278.3,256.6  "/>
            </g>
          </svg>
        </div>
      </div>
      <div class="social-item">
        <div class="hoversvg" v-on:mouseover="perfilSocial = 'behance'" v-on:mouseout="perfilSocial = ''">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          	 width="80px" height="80px" viewBox="0 0 94 94" style="enable-background:new 0 0 94 94;" xml:space="preserve">
          	<g>
          		<path d="M68.77,41.799c-7.32,0-8.34,7.307-8.34,7.307h15.566C75.997,49.105,76.089,41.799,68.77,41.799z"/>
          		<path d="M33.453,49.105H19.658V61.77h13.157c1.979-0.055,5.633-0.676,5.633-6.153C38.448,49.041,33.453,49.105,33.453,49.105z"/>
          		<path d="M36.804,36.154c0-4.93-3.352-4.93-3.352-4.93h-1.777H19.658v10.574h12.939C34.833,41.799,36.804,41.084,36.804,36.154z"/>
          		<path d="M89,0H5C2.239,0,0,2.238,0,5v84c0,2.762,2.239,5,5,5h84c2.762,0,5-2.238,5-5V5C94,2.238,91.762,0,89,0z M58.389,25.594
          			h19.551v5.836H58.389V25.594z M48.505,56.205c0,14.463-15.053,13.986-15.053,13.986H19.658h-0.405H8.793V22.803h10.46h0.405
          			h13.795c7.493,0,13.409,4.137,13.409,12.617s-7.23,9.018-7.23,9.018C49.164,44.438,48.505,56.205,48.505,56.205z M85.079,55.43
          			H60.521c0,8.805,8.34,8.248,8.34,8.248c7.877,0,7.6-5.098,7.6-5.098h8.34c0,13.529-16.216,12.604-16.216,12.604
          			c-19.46,0-18.21-18.117-18.21-18.117S50.359,34.86,68.584,34.86C87.766,34.859,85.079,55.43,85.079,55.43z"/>
          	</g>
          </svg>
        </div>
      </div>
      <div class="social-item">
        <div class="hoversvg" v-on:mouseover="perfilSocial = 'twitter'" v-on:mouseout="perfilSocial = ''">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          	 width="80" height="80" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
          <g>
          		<path d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z
          			 M400.35,186.15c-2.55,117.3-76.5,198.9-188.7,204C165.75,392.7,132.6,377.4,102,359.55c33.15,5.101,76.5-7.649,99.45-28.05
          			c-33.15-2.55-53.55-20.4-63.75-48.45c10.2,2.55,20.4,0,28.05,0c-30.6-10.2-51-28.05-53.55-68.85c7.65,5.1,17.85,7.65,28.05,7.65
          			c-22.95-12.75-38.25-61.2-20.4-91.8c33.15,35.7,73.95,66.3,140.25,71.4c-17.85-71.4,79.051-109.65,117.301-61.2
          			c17.85-2.55,30.6-10.2,43.35-15.3c-5.1,17.85-15.3,28.05-28.05,38.25c12.75-2.55,25.5-5.1,35.7-10.2
          			C425.85,165.75,413.1,175.95,400.35,186.15z"/>
          	</g>
          </svg>
        </div>
      </div>
      <div class="social-item">
        <div class="hoversvg" v-on:mouseover="perfilSocial = 'linkedin'" v-on:mouseout="perfilSocial = ''">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          	 width="80" height="80" viewBox="0 0 430.117 430.118" style="enable-background:new 0 0 430.117 430.118;"
          	 xml:space="preserve">
          <g>
          	<path id="LinkedIn__x28_alt_x29_" d="M398.355,0H31.782C14.229,0,0.002,13.793,0.002,30.817v368.471
          		c0,17.025,14.232,30.83,31.78,30.83h366.573c17.549,0,31.76-13.814,31.76-30.83V30.817C430.115,13.798,415.904,0,398.355,0z
          		 M130.4,360.038H65.413V165.845H130.4V360.038z M97.913,139.315h-0.437c-21.793,0-35.92-14.904-35.92-33.563
          		c0-19.035,14.542-33.535,36.767-33.535c22.227,0,35.899,14.496,36.331,33.535C134.654,124.415,120.555,139.315,97.913,139.315z
          		 M364.659,360.038h-64.966V256.138c0-26.107-9.413-43.921-32.907-43.921c-17.973,0-28.642,12.018-33.327,23.621
          		c-1.736,4.144-2.166,9.94-2.166,15.728v108.468h-64.954c0,0,0.85-175.979,0-194.192h64.964v27.531
          		c8.624-13.229,24.035-32.1,58.534-32.1c42.76,0,74.822,27.739,74.822,87.414V360.038z M230.883,193.99
          		c0.111-0.182,0.266-0.401,0.42-0.614v0.614H230.883z"/>
          </g>
          </svg>

        </div>
      </div>
    </div>


    <div class="whatsocial">
      <div v-if="perfilSocial == 'github'">
        <h2>github</h2> </div>
      <div v-if="perfilSocial == 'facebook'">
        <h2>facebook</h2> </div>
      <div v-if="perfilSocial == 'codepen'">
        <h2>codepen</h2> </div>
      <div v-if="perfilSocial == 'behance'">
        <h2>behance</h2> </div>
      <div v-if="perfilSocial == 'twitter'">
        <h2>twitter</h2> </div>
      <div v-if="perfilSocial == 'linkedin'">
        <h2>linkedin</h2> </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'intro',
    data() {
      return {
        perfilSocial: '',
        mysocial: [{
            'name': 'facebook',
            'url': 'url',
            'image': 'facebook.svg'
          }, {
            'name': 'github',
            'url': 'url',
            'image': 'github.svg'
          }, {
            'name': 'codepen',
            'url': 'url',
            'image': 'codepen.svg'
          }, {
            'name': 'behance',
            'url': 'url',
            'image': 'behance.svg'
          }, {
            'name': 'twitter',
            'url': 'url',
            'image': 'twitter.svg'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .esp {
    // min-height: 100vh
  }

  .apresentation {
    width: 900px;
    max-width: 90%;
    margin: 0 auto;
    padding-bottom: 70px;
    h1 {
      font-size: 2em;
    }
    p {
      font-size: 1.5em
    }
  }

  .social {
  padding-top: 100px;
    .social-item {
      margin: 1px;
      text-align: center;
      flex-basis: 100px;
      cursor: pointer;
    }
  }

  .whatsocial {
    padding-top: 10px;
    text-align: center;
    min-height: 50px;
    color: #04AA51;
    font-weight: 900;
    text-transform: capitalize;
  }

  .hoversvg {
    transition: .2s;
    fill: #2B2836;
    &:hover {
      fill: #04AA51;
      transform: translateY(-10px);

    }
  }
</style>
