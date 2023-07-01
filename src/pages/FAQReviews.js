import React from 'react';
import ChatBot from "../components/ChatBot";

function FAQReviews() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3 className="mt-4" style={{ color: '#02323a' }}><u>FAQ</u> <i className="bi bi-patch-question-fill"></i></h3>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Q: What types of books do you restore, repair, and digitize?
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={{ backgroundColor: '#f2f2f2' }}>A: We handle a wide range of books, including hardcovers, paperbacks, leather-bound, and antique books.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Q: Can you repair books with torn pages or loose bindings?
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={{ backgroundColor: '#f2f2f2' }}>A: Absolutely! We specialize in repairing torn pages, loose bindings, and other book damage.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Q: Do you offer restoration services for rare and valuable books?
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={{ backgroundColor: '#f2f2f2' }}>A: Yes, we have extensive experience in handling and restoring rare and valuable books with utmost care and precision.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  Q: How long does the restoration or repair process take?
                </button>
              </h2>
              <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={{ backgroundColor: '#f2f2f2' }}>A: The timeline depends on the condition of the book and the extent of the restoration or repair required. We can provide an estimate after evaluating your book.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  Q: Do you offer digitization services for entire book collections?
                </button>
              </h2>
              <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={{ backgroundColor: '#f2f2f2' }}>A: Yes, we provide digitization services to create high-quality digital copies of entire book collections.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <h3 className="mt-4" style={{ color: '#02323a' }}><u>Reviews</u> <i className="bi bi-megaphone-fill"></i></h3>
          <div id="scrollspyHeading1">Sarah M.</div>
          <p>"I had a treasured family Bible with torn pages, and they worked magic on it! The repairs are seamless, and now our family heirloom looks as good as new. Highly recommended!"</p>
          <div id="scrollspyHeading2">Michael C.</div>
          <p>"I was devastated when my favorite novel's spine started falling apart. But thanks to their expertise, my book is now back in one piece. It's like a resurrection for my beloved story!"</p>
          <div id="scrollspyHeading3">Emily R.</div>
          <p>"The team at this book repair service is simply outstanding! They not only fixed the torn pages in my vintage cookbook but also made it look stunning again. Their attention to detail is unmatched."</p>
          <div id="scrollspyHeading4">David H.</div>
          <p>"I had a damaged first edition that I thought was beyond repair. But these book wizards proved me wrong! They worked wonders on it, and now I can proudly display it in my collection."</p>
        </div>
      </div>
      <ChatBot />
    </div>
  );
}

export default FAQReviews;
