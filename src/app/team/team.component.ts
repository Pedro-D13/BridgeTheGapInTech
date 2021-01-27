import {
  BreakpointObserver,
  Breakpoints
} from '@angular/cdk/layout';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  relPath = "assets/team_image/"

  constructor(private bpo: BreakpointObserver) {
    bpo.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.Small
    ]).subscribe(results => {
      if (results.matches) {
        this.activateHandsetLayout()
      }
    })
  }


  activateHandsetLayout() {

  }



  ngOnInit(): void {}

  data = [{
      name: 'Hana A',
      info: 'Hana Abdi is the founder of Bridge The Gap In Tech (BTGIT). She is a Full Stack Developer with over 8 years experience in the Tech industry. She holds a Master’s degree in Computer and Information Systems Security, alongside her Bachelor’s degree in Computer Science. She is also community organiser, budding entrepreneur and Tech enthsiast. ',
      img: this.relPath + "hana_img.png"
    },
    {
      name: "Pedro Dias",info:
      `
       I'm a Chemistry Graduate, who is currently on the path of a Web Developer. I enjoy learning, building and working with web technologies.

      With this growth mindset, I have successfully built up a set of technical tools over the past 3+ years, enabling me to work comfortably along any point within the development cycle of an application`,
    img:this.relPath+'/pedro.png'}, {
      name: 'Jamal Yusuf',
      info: 'Jamal Yusuf is a Senior Backend Engineer, he has previously worked with Eye-Tracking technology which allows individuals to control computers with their eyes, then for the two largest internet service providers in America, building and designing systems that keep the internet running. And most recently working a NoSQL startup helping bring a new product to market. He is now working full time building a platform for Mind Machine Interaction, which is a new technology that enables you to control computers with just your mind.',
      img: this.relPath + "jamal.png"
    },
    {
      name: 'Hibo H',
      info: 'Hibo H is currently pursuing a Master’s in International Human Resources after having completed her BSc in International Business. With this she hopes to drive the positive change for representation the Tech industry is in dire need of. Her journey into Tech started with a side job she had as a Technical Specialist throughout University but as she explored the industry she found the opportunities and possibilities in the industry to be endless.',
      img: `${this.relPath}hibo.png`
    },
    {
      name: 'Omar A',
      info: 'Omar A is a Software Engineer in training entering into the Tech industry from the Energy industry. He got his first look into the Tech industry during a coding module on his college course where he covered the basics of Web Design. This included being taught all about HTML, CSS and how to make a website, after having completed the course, his interest in Tech deepened and led him to carry on building his knowledge base through FreeCodeCamp, a nonprofit community that helps people learn to code by building projects, while also attending various Tech events such as the Black In Tech Festival held in 2019 at Facebook in London. ',
      img: this.relPath + "hana_img.png"
    },
    {
      name: 'Hibo Abdilaahi',
      info: 'Hibo Abdilaahi is a former Market Researcher turned Software Developer for an Ed-Tech startup. Hibo transitioned into Tech by completing the Makers Academy coding bootcamp and is passionate about using her skills to make positive change.She holds a BSc in Psychology from UCL. In her spare time, she can be found sampling London’s best restaraunts and listening to podcasts.',
      img: this.relPath + "hibo_2.png"
    },
    {
      name: "Nasra Mo",
      info: "Nasra Mohamed is one of the non-tech members of the BTGIT team. She deals with the creative end, the social media accounts and the essential miscellaneous tasks. She is a creative through and through with a background in Art & Design. She believes you can find beauty in any field and thoroughly enjoys creating and discovering new and unconventional ways to make art.",
      img: this.relPath + "nasra.png"
    }
  ]


}
