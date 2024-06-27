import Carousel from 'react-bootstrap/Carousel';
import "./Homebanner.css";
function HomeBanner() {
  return (
    <Carousel>
      <Carousel.Item>
      
        <img src='https://zebronics.com/cdn/shop/articles/Must-have-gadgets-banner.jpg?v=1615553732&width=2048' alt=''/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/azalea-electronics-ad-template-huxhyha126f192.webp' alt=''/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src='https://img.freepik.com/premium-vector/product-advertising-hero-image-header-layout_1302-21013.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1711497600&semt=ais' alt=''/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeBanner;