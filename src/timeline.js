import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css'

function TimeLine() {
    return(
<div id="timeLine">
<VerticalTimeline >
  <VerticalTimelineElement
    className="vertical-timeline-element--work timeLineBlock"
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2025-Current"
  iconStyle={{ 
    color: '#fff',
    width: '60px',  // Default icon size
    height: '60px', // Default icon size
    padding: '0'    // Remove default padding
  }}    icon={<img
              src="https://res.cloudinary.com/djgjwxdih/image/upload/v1747132029/portfolio/startup_w0hjn9.png" 
                    style={{ 
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '50%'}}
            ></img>
}
  >

    <h3 className="vertical-timeline-element-title">Software Development & Management</h3>
    <h4 className="vertical-timeline-element-subtitle mt-2 text-info">Independent Start-Up</h4>

    <p>
       Developing the first AI driven dating app, coding core features and managing contract engineers
      <br className='mt-1 mb-1'/>

    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work timeLineBlock"
    date="2022-2025"
    contentArrowStyle={{ borderRight: '7px solid  rgb(108, 217, 87)' }}
      iconStyle={{ 
    background: 'rgb(255, 255, 255)', 
    color: '#fff',
    width: '60px',  // Default icon size
    height: '60px', // Default icon size
    padding: '0'    // Remove default padding
  }}    icon={<img
              src="https://res.cloudinary.com/djgjwxdih/image/upload/v1747131916/portfolio/convergenz_logo_ihdknv.jpg" 
                    style={{ 
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '50%'}}
            ></img>
}

  >
    <h3 className="vertical-timeline-element-title">Senior Software Engineer & Project Manager</h3>
    <h4 className="vertical-timeline-element-subtitle mt-2 text-info">Convergenz (Vendor for
TikTok USDS)</h4>
    <p>
      Led a cross-functional team of 6 engineers in the execution of a multi-million-dollar project developing Software for TikTok USDS
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work timeLineBlock"
    date="2022"
        contentArrowStyle={{ borderRight: '7px solid  rgb(243, 33, 33)' }}

  iconStyle={{ 
    background: 'rgb(255, 255, 255)', 
    color: '#fff',
    width: '60px',  // Default icon size
    height: '60px', // Default icon size
    padding: '0'    // Remove default padding
  }}    icon={<img
              src="https://res.cloudinary.com/djgjwxdih/image/upload/v1747131825/portfolio/NumberOneAI_Logo_gzbv6f.jpg" 
                    style={{ 
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '50%'}}
            ></img>
}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle mt-2 text-info">NumberOne AI</h4>

    <p>
      Lead Developer in charge of two full stack cross platform projects (Web & Mobile)
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work timeLineBlock"
    date="2018-2019"

    contentArrowStyle={{ borderRight: '7px solid  rgb(5, 99, 231)' }}

    iconStyle={{ 
    background: 'rgb(255, 255, 255)', 
    color: '#fff',
    width: '60px',  // Default icon size
    height: '60px', // Default icon size
    padding: '0'    // Remove default padding
  }}    icon={<img
              src="https://res.cloudinary.com/djgjwxdih/image/upload/v1747132210/portfolio/ciig-lg_oowfjj.png" 
                    style={{ 
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '50%'}}
            ></img>
}

  >
    <h3 className="vertical-timeline-element-title">Front-End Developer (Contract)</h3>
    <h4 className="vertical-timeline-element-subtitle mt-2 text-info">Community Infrastructure Investment Group</h4>
    <p>
       Building dynamic, cross-browser compatible web applications using modern JavaScript frameworks
    </p>
  </VerticalTimelineElement>

  
  
 
</VerticalTimeline>
</div>
);
}

export default TimeLine;