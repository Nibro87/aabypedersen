import './style.css'
import image from "./image.jpg"

import opskrifter from "./opskrifter.png"
import after from "./after.png"
function MyBody() {

    return(

        <div class="container">
      <div class="row mb-5">
      
        <div class="col-sm-12 col-md-6">
          <h1>Din personlige kostvejleder</h1>
         
          <h4>Om mig:</h4>
          

          <p>Jeg har selv været igennem en livsstilsændring, et vægttab på 50 kg, så kender alt til hvordan det er at gennemgå og være i en livsudvikling. 
            Med 4 børn, hamsterhjulet der kører havde jeg pludselig glemt sig selv i flere år. 
            Det krævede øvelse og tid at lærer at prioritere sig selv. At mærke velvære og følelse af at være i balance med sig selv 
            Jeg havde længe været træt af mit spejlbilledet men følte ikke jeg havde overskuddet og troen på jeg kunne få det anderledes. Undgik spejlet, vågnende ikke glad om morgenen da det påvirkede mit sind meget at være mindre tilfreds i egen krop. 
            Jeg trak mig fra sociale oplevelser og arrangementer og det lignede bare ikke mig. Sådan ønskede jeg bare ikke at være inderst inde. Ønskede ikke at begrænse mig selv, begrænse mine børn fordi jeg ikke havde det godt i egen krop. 
            Selvprioritering er givet godt ud. </p>
          <h5>Ønsker, drømme og mål</h5>
          <p>Har du nogensinde haft en drøm om at leve en sundere livsstil? Ønsker du at forbedre dine kostvaner og livskvalitet? Hos mig som kostvejleder vil jeg hjælpe dig med at opnå dine ønsker, drømme og mål på en sund og holdbar måde.
            Sammen vil vi opbygge en sund livsstil, der passer til din hverdag og dine mål. Jeg vil hjælpe dig med at udvikle sunde vaner og lave kostplaner, der passer til din livsstil og smag.
            Jeg tror på, at en sund livsstil skal være sjov og tilgængelig for alle. Derfor vil jeg give dig værktøjer og motivation til at fortsætte på den sunde vej, og hjælpe dig med at finde glæden ved at spise sundt og motionere regelmæssigt.
            Lad mig hjælpe dig med at opnå dine ønsker, drømme og mål. Kontakt mig i dag og lad os tage det første skridt mod en sundere livsstil sammen.</p>
          
          <h5>Forløb</h5>
          <p>Mit fokus vil være på at hjælpe dig med at opnå dine kostmæssige mål og give dig de redskaber, der er nødvendige for at ændre dine kostvaner på en sund og holdbar måde. Vi vil også arbejde på dit mindset, da det spiller en vigtig rolle i at opnå succesfulde kostændringer. Hvis du på et senere tidspunkt ønsker at inkludere træning i dit program, kan vi også tale om dette og tilpasse programmet derefter. 
            Men det er Ikke en forudsætning for at starte i forløb hos mig.<a href="https://client.beefit.io/checkout/6413117fa4156c001396b7c8">Klik her for at se forløbet</a>.</p>


            <h5>Hos mig for du:</h5>
            <ul class="my-list">
  
    <p>Personligt forløb hvor jeg dagligt er til rådighed, vi kommunikerer i en chat funktion, kommunikation og støtte har stor betydning i en livsstilsændring.</p>
  
  <p>
    Personlig kostplan sammensat udfra ønsker og hverdagsliv, er der madvarer du ikke syntes om, allergier mm tages der hensyn.
  </p>
  
    <p>Aktivitets og træningsplan</p>
  
  <p>
    Check ind i app
  </p>
  <p>
    Målsætninger, ugentlig delmål.
  </p>
  <p>
    Fokus på mindset, vaner, hvordan får man nye vaner og opnår balance i sin livsstil.
  </p>
</ul>


           

        </div>
        <div class="col-12 col-sm-6">
        <img src={opskrifter} class="img-fluid " alt="placeholder image" style={{maxWidth: '75%', }}/>
        <img src={after} class="img-fluid" alt="placeholder image" style={{maxWidth: '75%', marginTop: '50px',  }}/>
        </div>
    
        
      </div>


    <div class="row">
        <div class = "col-lg-8 col-md-6 col-sm-12">
        
        <h2 class="form-header">Send mig en besked hvis du ønsker en uforpligtende snak, et tilbud på mine forløb eller blot ønsker at kende prisen på mine forløb:</h2>
    
            <div class = "contact-form">
                <form id ="contact" action="https://formsubmit.co/Nicholasbroch400@gmail.com" method="POST">
                    <div class ="row">
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <fieldset>
                                <input id='name' class="form-control" name="name" placeholder='Navn' required="" />   
                            </fieldset>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <fieldset>
                                <input id='email' class="form-control" name="email" type="email" placeholder='E-Mail' required="" />   
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