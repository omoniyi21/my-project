import React, {Component} from 'react';
import './Blog.css';
import 'animate.css';
import blogpic from "./Blog-title.png"
import Navigation from '../Nav/Nav';
import {Col} from "react-bootstrap";
import "animate.css";
import Cards from "./card.js"
import Footers from '../Nav/Footer';





class Blogs extends Component{
    render(){
        return(
            <div className="blog-background">
            <Navigation/>
            
            <div className="blog-posts">
            <Col className="BlogCards" md={8}>
<p>Now more than ever is the time to do what you want! If you weren’t doing that before, I suggest you stop whatever it is you’re doing right now, and go after exactly what you’re seeking.</p>

<p>I have worked in Social Work for the past couple years, and about 7 months ago I actively began to change that. As a self-taught graphic designer, I’ve fallen in love with seamless graphics around the web. This, among other things, prompted my decision to start learning how to code. Throwing it back to the Myspace days where I used to format my profile with the latest lyrics, and pics of friends, I honestly thought I was going back to my roots….I WAS WRONG! (Haha) I was in for a surprise as I tried to skim the surface with Coursera. I Honestly only learned enough to get acquainted with HTML5/CSS. So yes, there are many benefits to this site including and not limited to:

-Easy access to wide range of resources 
-Feedback from others
-A wide selection of classes and specialties 
-CONVENIENT (easy self-scheduler)

but it wasn’t enough to give me the full scope of being a developer, specifically a front-end developer. I needed something with more structure and hands-on teachers, these details were important to me, while also not going DEAD broke. I sought the best choices for me, and I wanted to clue you in on the resources I found on my little scavenger hunt on Google.

(I am by no means an “expert”, I just wanted to give young, clueless people like me a little but of a clue . )

Design Lab 
https://trydesignlab.com/

First, lets start with DesignLab! I haven’t had any personal experience with the program, but it was first on my list of “research”. It is a User Interface and User Experience focused program that boasts its three courses that last 4 weeks each. ‘Design 101’ , ‘UX Research & Strategy’, and ‘Interaction Design’, they each leave you with a portfolio to show future employers and run for about $400. This isn’t too shabby, but the length of the course didn’t seem sufficient to cover the material I wanted. I was not only interested in UX/UI, but also wanted to develop Front-end development skills. So if you’re looking for a way to break into the design work via user experience and interface, for a reasonable price this is something worth looking into! 

Udemy 
https://www.udemy.com/courses/development/

This site is a gem! It has a variety of courses from a range of specialties beyond the scope of computer programming, but lets focus on that. They have a wide range of instructors and courses in web development, similar to Coursera, but they are much more affordable. They have courses that I would consider good in supplement with other programs, and would also be suitable as self-study if you’re pretty self-motivated.  Their development courses are fairly cheap, so definitely worth checking out. They cover full stack development technologies and languages like Python, C#, Javascript, and Java. The technologies they cover include but are limited to React, Swift, Angular. Pretty extensive and self-paced learning, Udemy is great in my book. 

Lambda School http://go.lambdaschool.com/career/?utm_medium=cpc&utm_source=google&utm_campaign=branded&utm_term=lambda%20school&gclid=EAIaIQobChMI48CRzoGQ3QIVD4_ICh2Nmw2EEAAYASAAEgIyo_D_BwE

Lambda School covers a three disciplines, but I was focused on Computer Programming/Software Development. The program covers a wide range of computer programing topics:
•	Front-End Development 
•	Back-end Development 
•	Computer Architecture 
•	Fundamentals of Computation 
•	Applied Programming: Security, Python, Django. 

The entire course lasts for 6 months. It’s a grueling 6 months, not gonna flex, attending class online from 12-8 EST was a difficult feat but worth it all. What an opportunity?! This program is really everything I was looking for and SUPER affordable (they allow you to attend school for free until you find a job making 50K or more) . This is a guarantee of not only a thorough overview of computer programming, but your payment is contingent on gaining employment, what’s not to love? BONUS, your payment helps another student start the course, so you are always paying forwards. I am obviously a bit biased, as I am a Lambda School Graduate *pats back* , but I would recommend this school to anyone who has the time to lend. 


Free Code Camp & Khan Academy (FREE.99)  

These two FREE yes FREE resources online helped me learn the fundamentals I wasn’t comfortable with. They are extremely self-paced and have a great way to test what you learn in whatever course you decide to complete, in regards to computer programming. They go over programing languages and Computer Architecture that I personally found difficult, but with these supplements I was able to get it.  

I also found these really dope articles about alternative programs that are affordable or free! 

https://studentloanhero.com/featured/coding-boot-camps-deferred-tuition/
https://www.coursereport.com/blog/coding-bootcamp-cost-comparison-full-stack-immersives
https://www.coursereport.com/blog/coding-bootcamp-deferred-tuition-income-share-agreements </p>

            </Col>
            <Col md={4}>
            
            <img className="animated zoomInUp" src ={blogpic} width="230px" height="250px"/>
            
            </Col>
            <Footers/>
            </div>  
                
    
            </div>
        )
    }
}

export default Blogs
