import { participantTemplate, successTemplate, totalFees } from './Templates.js';


document.addEventListener('DOMContentLoaded', function() {
    let participantCount = 1;

    const addButton = document.getElementById('add');
    //const participantCountsFieldset = document.querySelector('.participants');
    const form = document.querySelector('form');

      addButton.addEventListener('click', () => {
        participantCount += 1;
        const newParticipantHTML = participantTemplate(participantCount);
        addButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
      });
 
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
    

        const total = totalFees();
    
    
        const adultName = document.getElementById('adult_name').value;
    
        form.classList.add('hide');
    
        summary.innerHTML = successTemplate({
          name: adultName,
          participants: participantCount,
          fees: total,

        });
        summary.style.display = 'block';

      });

});