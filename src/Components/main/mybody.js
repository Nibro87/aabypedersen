import './style.css'
import image from "./image.jpg"

function MyBody() {

    return(

        <div class="container">
      <div class="row mb-5">
        <div class="col-sm-12 col-md-6">
          <h1>Din personlige kostvejleder</h1>
          <h4>Om mig:</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur nulla ac velit convallis, non facilisis libero malesuada. In lacinia diam ut diam dapibus, et laoreet felis viverra.</p>
          <h5>Ønsker, drømme og mål</h5>
          <p>Har du nogensinde haft en drøm om at leve en sundere livsstil? Ønsker du at forbedre dine kostvaner og livskvalitet? Hos mig som kostvejleder vil jeg hjælpe dig med at opnå dine ønsker, drømme og mål på en sund og holdbar måde.
            Sammen vil vi opbygge en sund livsstil, der passer til din hverdag og dine mål. Jeg vil hjælpe dig med at udvikle sunde vaner og lave kostplaner, der passer til din livsstil og smag.
            Jeg tror på, at en sund livsstil skal være sjov og tilgængelig for alle. Derfor vil jeg give dig værktøjer og motivation til at fortsætte på den sunde vej, og hjælpe dig med at finde glæden ved at spise sundt og motionere regelmæssigt.
            Lad mig hjælpe dig med at opnå dine ønsker, drømme og mål. Kontakt mig i dag og lad os tage det første skridt mod en sundere livsstil sammen.</p>
          <h5>Hos mig for du:</h5>
          
          <ul>
          <li>
              Personigt forløb hvor jeg dagligt er til rådighed, vi kommunikerer i en
              chat funktion, kommunikation og støtte har stor betydning i en
              livsstilsændring.
          </li>
          <li>
              Personlig kostplan sammensat udfra ønsker og hverdagsliv, er der
              madvarer du ikke syntes om, allergier mm tages der hensyn.
            </li>
            <li>Aktivitets og træningsplan</li>
            <li>Check ind i app</li>
            <li>Målsætninger, ugentlig delmål.</li>
            <li>
              Fokus på mindset, vaner, hvordan får man nye vaner og opnår
              balance i sin livsstil.
            </li> 
          </ul> 

        </div>
        
        
        
        <div class="col-sm-12 col-md-6">
          <img src={image} alt="placeholder image" style={{maxWidth: '100%'}}/>
        </div>
      </div>


    <div class="row">
        <div class = "col-lg-8 col-md-6 col-sm-12">
        
        <h2 class="form-header">Kontakt mig for en uforpligtende samtale:</h2>
    
            <div class = "contact-form">
                <form id ="contact" action="" method="POST">
                    <div class ="row">
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <fieldset>
                                <input id='name' class="form-control" name="name" placeholder='Navn' required="" />   
                            </fieldset>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <fieldset>
                                <input id='email' class="form-control" name="_replyto" type="email" placeholder='E-Mail' required="" />   
                            </fieldset>
                        </div>
                        <div class="col-lg-12">
                            <fieldset>
                                <textarea id='message' class="form-control" name="message" rows="6" placeholder='Din besked' required="" />   
                            </fieldset>
                        </div>
                        <div class="col-lg-12">
                            <fieldset>
                                <button id='form-submit' class="main-button" type='submit' value="Send">
                                 Send mail
                                </button>   
                            </fieldset>
                        </div>                          
                    </div>
                </form>
            </div>
        </div>


    </div>



      
    </div>

    

    


    );


}

export default MyBody