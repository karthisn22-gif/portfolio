export default function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="wrap">
          <p className="mono">08 — Contact</p>
          <h2 style={{ marginTop: '1rem' }}>Open to building something worthwhile.</h2>
          <div className="mails">
            <div className="mail">
              <a href="tel:+919585814107">+91 95858 14107</a>
              <button className="btn" data-copy="+919585814107">Copy</button>
            </div>
            <div className="mail">
              <a href="mailto:karthi.sn22@gmail.com">karthi.sn22@gmail.com</a>
              <button className="btn" data-copy="karthi.sn22@gmail.com">Copy</button>
            </div>
          </div>
          <div className="cta">
            <a className="btn p" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=karthi.sn22@gmail.com&amp;su=Hello%20Karthikeyan" target="_blank" rel="noopener">Send an email</a>
            <a className="btn" href="https://linkedin.com/in/karthisn" target="_blank" rel="noopener">LinkedIn ↗</a>
            <a className="btn" href="https://leetcode.com/u/karthikeyan_sn" target="_blank" rel="noopener">LeetCode ↗</a>
          </div>
        </div>
      </section>
    </>
  )
}

