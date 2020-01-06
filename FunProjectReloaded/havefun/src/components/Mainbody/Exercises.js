import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Exercises.css'
import Share from '../Share/Share'
import YouTube from '../YouTube/Youtube'
import image1 from '../../Images-Set/wb0198_gymtimidation_graphics_blog-image.jpg'
import image2 from '../../Images-Set/wb0198_gymtimidation_graphics_scary.jpg'
import image3 from '../../Images-Set/injection.jpg'
import image4 from '../../Images-Set/wb0198_gymtimidation_graphics_spider.jpg'
import image5 from '../../Images-Set/wb0198_gymtimidation_graphics_intimidating-1.jpg'
import image6 from '../../Images-Set/rebekah-case-study-3-setting-up-treadmill.jpg'
import image7 from '../../Images-Set/roxy-case-study-2-freeweights-2.jpg'
import image8 from '../../Images-Set/robin-case-study-3-leg-extension-machine.jpg'
import image9 from '../../Images-Set/shallow-focus-photography-of-smoothie-926361.jpg'
import image10 from '../../Images-Set/valery-sysoev-LDAirERNzew-unsplash.jpg'
import image11 from '../../Images-Set/assorted-spices-near-white-ceramic-bowls-678414.jpg'
class Exercises extends Component {
    
   homeHandler(){

   window.location='/'

   }

    render() {

        
        return (
           
            <div>
                 <div className="nav-decoration">
                 <div className="container">
                 <div className="Glyp-set">
                
                 <span> <Link to="/signup"><img src="https://img.icons8.com/ios-glyphs/40/000000/user-male.png"></img></Link>
                 <b>Sign Up! </b></span>
                
                 </div>
                 </div>
                 </div>

                 <div className="exercise-set">
                <div className="container-fluid">
               
               
                 <div className="first-portion-adjust">
                 <div className="container">
                 
                 <h2>FEELING SCARED OF GYM? YOU ARE NOT ALONE </h2>
                 
            <div className="row">
                 
                <div className="col-lg-7 col-md-6 col-sm-12">
                   {/* <img src="http://getwallpapers.com/wallpaper/full/3/7/2/53549.jpg"></img>*/}
                      <div className="first-portion-text" >
                             <p >Following points are retrieved from various researches done by various firms</p>
                      </div>
                   
                      <div className="first-portion-img-adjust">
                          <img src={image1}></img>
                      </div>
                </div>
            </div>
                    <div className="second-portion-adjust">
                   
                       <div className="row">
                   
                         <div className="col-lg-7 col-md-6 col-sm-12">
                    
                            <h3>WHY WE ARE SCARED OF GYM,HOW TO OVERCOME FEAR</h3>
                    
                            <div className="second-portion-text1">
                             <p>There’s no getting around the fact that for some of us the gym can feel like an 
                                intimidating place when you’re first starting out. Our latest research shows that 
                                50% of non-gym members say they find the idea of going to the gym scary, with one 
                                in five saying they would find it very scary.  But don't worry,
                                because we have found the best ways of overcoming this
                            </p>
                            </div>
                     
                           <div className="second-portion-img1">
                               <img src={image2}></img>   
                           </div>
                     
                           <div className="second-portion-text2"> 

                           <p>To learn more about the concept of ‘gym fear’ we
                              asked people about other fears they have, to see how they compare.  
                              So, how scary is the gym? Well some are so spooked by gym that one 
                              in four people said they would rather choose to have an injection with
                              a needle, or be alone in a room with a spider than go to the gym!
                            </p>
                     
                           </div>
                     
                           <div className="second-portion-img2">
                               <img src={image3}></img>
                           </div>
                       
                           <div className="second-portion-text3">
                     
                           <p>30% of millennials said they’d rather give up their phone
                           for a day instead of going to the gym alone, and 25% of
                           females said they’d rather go on a rollercoaster than head to the gym.
                           </p>
                          </div>
                      
                          <div className="second-portion-img3">
                              <img src={image4}></img>
                          </div>

                          <div className="second-portion-text4">
                           <p>But the gym doesn’t need to be as anxiety inducing as spiders and needles and heights! We delved a l
                              deeper to uncover exactly what thoughts people have about the gym which make
                               it feel scary before a first visit:</p><br></br>
                              
                                  <p><b>FIVE THINGS THAT SCARE US THE MOST ABOUT THE GYM</b></p>  
                             
                                   <ul>
                               
                                      <li><b>Looking stupid in front of other people:</b> Many of us (nearly 40%) are nervous about the gym 
                                             because we’re afraid of showing people that we don’t know what we’re doing
                                              </li>
                               
                                      <li><b>Feeling self-conscious about your fitness:</b> Nearly half of the females we spoke to (45%) said they 
                                             would be nervous in the gym if the other gym-goers were fitter than they were (29% of men felt the same way)
                                             </li>
                               
                                      <li><b>Lifting weights:</b> A third of us (32%) said the most intimidating area of the gym was the squat rack,
                                           followed by the pull-up/chin-up machine and then the bench press. 
                                           64% said they didn’t know how heavy the weights they use should be
                                           </li>
                               
                                      <li><b>The treadmill:</b> A whopping 44% of the participants 
                                             didn’t know how to turn on and set up a treadmill for a workout
                                             </li>
                               
                                      <li><b>Asking for help:</b> Almost half (48%) said they’d be too embarrassed to ask another gym goer for help, and 44% 
                                          said the same thing about asking a staff member for help
                                          </li>
                                 </ul>

                            
                          </div>   

                          <div className="second-portion-img4">
                             <img src={image5}></img>
                          </div>
                          <div className="second-portion-text5">
                          
                          <h3><b>PUTTING GYM FEAR TO THE TEST</b></h3>
                            
                            <p>We enlisted three non-gym-goers to confront their fears in the name of science, 
                              and visit a gym to do the three things that commonly scare being most 
                              about the gym: enter the free weight area, set up a treadmill and ask someone for help.
                            </p>
                          
                             <p>The participants’ heart rates and temperature were monitored throughout the
                               experience to see the actual physical stresses that occurred due to their 
                               gym fear. The data recorded revealed that there was a definite bodily reaction 
                               to the mental stress felt by the participants, but that some of the situations
                                were less stressful than others:
                             </p>
                             <div className="text-5-images">
                             <div className="row">

                                 
                                 <div className="col-lg-4 col-sm-12"> 
                                 <img src={image6}></img>
                                 </div>
                                

                                 
                                 <div className="col-lg-4 col=sm-12">
                                 <img src={image7}></img>
                                 </div>
                                 

                                 
                                 <div className="col-lg-4 col-sm-12">
                                 <img src={image8}></img>
                                 </div>
                                 

                             </div>
                            </div>
                          </div>

                           <div className="second-portion-text6">
                                
                                <ul>
                                 
                                 <li><b>Least stressful = visiting the free weights area:</b>
                                 Although when asked people said the weights area was the most 
                                 terrifying, the data showed that this task actually prompted the
                                  smallest increase in heart rate in all three case studies.  
                                 </li>
                                 
                                 <li><b>Pretty stressful = setting up a treadmill:</b>
                                 Participants had a significant spike in heart rate and 
                                 temperature when setting up a treadmill 
                                 (not actually running on it, but just the process of setting it up). 
                                 To help you combat this fear and prepare for this before you visit the gym,
                                  we’ve created an online guide which shows you how to set up our treadmills.
                                 </li>
                                   
                                 <li><b>Most stressful = asking for help:</b>
                                 Asking a member of staff or fellow gym-goer for 
                                 assistance proved the scariest for our researchers, 
                                 with a big surge in both temperature and heart rates.
                                 </li>


                                </ul>
                         </div>
                         <div className="you-tube-adjust">
                         <div className="you-tube-set">
                                        <YouTube></YouTube>
                         </div>
                         </div>
                         <div className="last-portion">
                          
                            <div className="last-portion-text1">
                             <h3><b>WHY DOES THE GYM MAKE US SO ANXIOUS?</b></h3>

                             <p>Exercising provides many benefits, but other things
                                that are good for us, like eating healthily or 
                                brushing our teeth, doesn’t seem to fill many of us
                                with the same dread as working out does.
                             </p>

                             <p>Dr. Margee Kerr teaches and researches everything ‘fear’
                                related at the University of Pittsburgh. She explains the
                                reason why the gym is different to other healthy activity 
                                in our minds is because “Going to the gym is a social 
                                experience, meaning it carries all the potential gains that
                                 come with socializing, but also all the fears and anxieties too
                             </p>

                             <p>In terms of understanding and overcoming your anxiety,
                                it’s better to compare going to the gym with other social
                                situations. Dr. Kerr says going to the gym can tap into the
                                same insecurities as starting a new job, a new school or giving
                                a presentation to peers. She says “We, as humans, are constantly 
                                comparing ourselves to our peers, analysing how we’re similar,
                                better, or worse. We also compare ourselves to our own 
                                expectations of what we think we should be capable of,
                                our internal representation of our ‘best’ self.
                             </p>

                             <p>Where we might be able to hide some of our vulnerabilities 
                               in the workplace or school, our weaknesses feel on full display 
                               in the gym, inciting intense feelings of vulnerability, of self-doubt, of fear.”
                             </p>

                             <p>Roxy, 37, shares what makes her the most nervous about visiting the gym:
                               “The aspect of being on my own in a gym isn’t an issue for me, as my nerves 
                               come more from the busyness. This really brings my feelings of low self-esteem 
                               to the fore, especially in situations such as the changing rooms, where I would
                               find myself comparing my body to the other women. Put simply, the busier the gym
                               is, the more intimidated I am.”
                             </p>



                            </div>

                            <div className="last-portion-text2">
                               <h3><b>GETTING OVER YOUR GYM FEAR</b></h3>
                              
                               <p>Dr. Kerr suggests the following tips for recognising and over-coming your gym anxieties:</p>
                                 <div className="last-portion-text2-sub">
                               <ol>
 
                                   <li><b>Remind yourself that you are in control.</b>
                                   Studies show a sense of control makes scary events
                                    easier to tolerate and overcome. So, acknowledge, 
                                    and frequently remind yourself, that you are the
                                    one choosing to take on this fear for a purpose,
                                    whether it’s to improve your general fitness, 
                                    to help you run a 5k, or get strong – whatever it
                                    may be, your doctor, spouse, family member, coach,
                                    etc. didn’t make you go to the gym, YOU did. Which 
                                    means YOU get to own and celebrate your wins, big and small.
                                   </li>
                               
                                   <li><b>Don’t ignore that you feel scared.</b>
                                   Denying, or attempting to suppress your fears doesn’t work. 
                                   In fact studies show it does the exact opposite. The more we
                                   try to NOT think of something the more salience, or importance 
                                   we give it, and the more it commands our attention, making it 
                                   difficult to pay attention to anything else.
                                       
                                   </li> 
                                   
                                   <li><b>Educate yourself.</b>
                                   Fear is all about the unknown, so you can do yourself
                                   a BIG favour and reduce a ton of anxiety by making an
                                   appointment with a staff member to learn about the gym 
                                   before your first workout. Learn where the locker rooms, 
                                   water fountains, and exits are located, and learn any 
                                   important gym protocol like proper equipment use and 
                                   class etiquette so you can get familiarise yourself in a new environment.
                                   </li>



                               </ol>
                              </div>

                            </div>

                           <div className="final-button">
                           <button type="button" class="btn btn-primary" onClick={this.homeHandler.bind(this)}> BACK TO HOME</button>
                           </div>

                           
                         </div>
                          

                    </div>


                    <div className="col-lg-3 col-md-4 col-sm-11 ">
                    <div className="share">
                   
                    <Share></Share>
                    </div>

                    </div>

                    </div>

                    
            
                    
                </div>
               

                
            </div>
            
             
            <div className="exercise-footer"> 
            
             <div className="exercise-footer-content">
             

             <h4>Some Related Articles</h4>
             

             <div className="row">
             
                <div className="col-lg-4 col-md-4 col-sm-4">
                   <a href="https://www.medicalnewstoday.com/articles/263371.php#muscle_building_and_weight_loss">
                   <img src={image9}></img>
                   </a>
                   <h4><b>Learn About Whey Protien</b></h4>
                   
               </div>
             
             <div className="col-lg-4 col-md-4 col-sm-4">
                
                <a href="https://bodycarehealthclub.com.au/weight-loss-vs-fat-loss-the-difference-explained/">
                <img src={image10}></img>
                </a>
                <h4><b>Weight Loss Vs Fat Loss</b></h4>
                
             </div>
             
             <div className="col-lg-4 col-md-4 col-sm-4">
             
              <a href="https://www.medicalnewstoday.com/articles/322827.php">
              <img src={image11}></img>
              </a>
              <h4><b>Plant Protien Vs Whey Protien</b></h4>
              
             
             </div>

             </div>
             
             </div>
            
            </div>
            
            
            
             </div>
             
             
            </div>

          
            
           

            </div>
            
            </div>


           
               

            
        
        );
    }
}

export default Exercises;