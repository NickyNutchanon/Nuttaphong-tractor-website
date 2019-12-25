import React from "react";
import Image from 'react-bootstrap/Image'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import stockimage1 from '../asset/img/stockimage1.jpg'

export function Contact() {
    return (<Container>
        <h1 className="text-center mt-4">Contact Us</h1>
        <Card>
        <h2>Head Office</h2>
        <p>17 Soi Vibhavadee Rangsit 16/35 Vibhavadee Rangsit Rd., Dindaeng Bkk 10400</p>
        <a href="tel:02- 691-4072-4">02- 691-4072-4</a>
        <p>Fax. 02-691-4253</p>
        <iframe
            width="1000"
            height="400"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCUjetkl7i-3VGT9m79fbLvR3Pixjw2las&q=บริษัท+ณัฐพงศ์แทรคเตอร์+จำกัด+(สำนักงานใหญ่)" allowfullscreen>
        </iframe>

        </Card>
        <Card>
        <h2>Phuket Branch</h2>
        <p>113/1 Moo 8 Pakhlok Sub-district, Thalang District, Phuket 83110</p>
        <a href="Tel:076-604-455"> 076-604-455</a>
        <a href="Tel:089-729-9253">089-729-9253</a>
        <p>Fax. (076) 604-188</p>
        <iframe
            width="1000"
            height="400"
            src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCUjetkl7i-3VGT9m79fbLvR3Pixjw2las&center=7.9890458,98.3724061&zoom=16" allowfullscreen>
        </iframe>
        </Card>
        <Card>
        <h2>Maintenance Shop</h2>
        <p>100/26 Moo 1 Soi Sabthawee, Phathum Thani-Sena Rd., Samkoke, Phathum Thani 12160</p>
        <a href="Tel:02-977-2551">02-977-2551</a>
        <a href="Tel:02-977-2552">02-977-2552</a>
        <iframe
            width="1000"
            height="400"
            src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCUjetkl7i-3VGT9m79fbLvR3Pixjw2las&center=14.0629634,100.5310726&zoom=30" allowfullscreen>
        </iframe>
        <h1>Or contact us via email!</h1>
        </Card>
    </Container>)
}