import { isDefined } from "../../utils/utilities";
import ContentError from "../../errors/ContentError";

export default class FaqController {
  faq = [];

  constructor() {
    let script = document.getElementById("faqScript");
    if (isDefined(script)) {
      try {
        this.faq = JSON.parse(script.innerHTML);
      } catch (err) {
        throw new ContentError("Invalid FAQ structure.");
      }
    }
  }

  getContent = () => {
    let i = 0;
    let cards = this.faq.map(f => {
      let card = `<div class="card faq">
        <div class="card-header" id="faq${i}">
          <h2 class="mb-0">
            <button class="btn faq-btn" type="button" data-toggle="collapse" data-target="collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
              ${f.q}
            </button>
          </h2>
        </div>
        <div id="collapse${i}" class="collapse" aria-labelledby="faq${i}" data-parent="#faqAccordion">
          <div class="card-body">
            ${f.a}
          </div>
        </div>
      </div>`;
      i++;

      return card;
    }).join("");
    return (`<div class="accordion" id="faqAccordion">${cards}</div>`)
  }

  setUpListeners = () => {
    document.querySelectorAll(".faq-btn").forEach(btn => {
      btn.removeEventListener('click', this.collapseEvent);
      btn.addEventListener('click', this.collapseEvent);
    });
  }

  collapseEvent = (event) => {
    $(event.target.closest('.faq').querySelector('.collapse')).collapse('toggle');
  }
}