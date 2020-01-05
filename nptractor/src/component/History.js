import React from "react";

import { Container } from 'react-bootstrap';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';


export function History() {
  return (<Container>
    <h1 className="text-center mt-4">Our History</h1>

    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

      >
        <h3 className="vertical-timeline-element-title">Today, we have over 120 of a variety of tools and machines for both rent and to be used in the construction. </h3>
        <h4 className="vertical-timeline-element-subtitle">We have more than 280 staffs and our assets are more than 250 million Baht.</h4>
        <p>
          We have been given many projects from both domestically and internationally and we are also likely to expand over to the South-east Asia in the near future
    </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2000"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}

      >
        <h3 className="vertical-timeline-element-title"> Nutthapong Tractor co., ltd. has opened a new branch in Phuket</h3>
        <p>
          We acquired many constructions within Phuket province, for example, the Construction of Soil Dam, Irrigation Canal, Streets, Bridge, View Point, Buildings, “Port and Marina” and many more which we were trusted in our capabilities and our excellence achievement.
    </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="1982"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}

      >
        <h3 className="vertical-timeline-element-title">We embarked on the actual construction to extend the service to the customers. </h3>
        <p>
          We started working on the projects that involved in building the base of oil drill and the entrance road for the THAI SHELL EXPLORATION AND PRODUCTION CO.,LTD. at Larnkrabur district, Kamphaeng Phet province
    </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="1978"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}

      >
        <h3 className="vertical-timeline-element-title">Nutthapong Tractor co., ltd. was established</h3>
        <p>
          We started with selling and renting machines to a very few clients and within only 2 – 3 years, we were capable of gaining many more customers and increased the income.
    </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}

      />
    </VerticalTimeline>
  </Container>)
}