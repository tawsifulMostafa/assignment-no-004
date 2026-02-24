
        const btnAll = document.getElementById('btn-all');
        const btnInterview = document.getElementById('btn-interview');
        const btnRejected = document.getElementById('btn-rejected');
        const noJobsEl = document.getElementById('no-jobs');

        const totalCountEl = document.getElementById('total-count');
        const interviewCountEl = document.getElementById('interview-count');
        const rejectedCountEl = document.getElementById('rejected-count');
        const availableCountEl = document.getElementById('available-count');

        function updateCounts() {
            const allCards = document.querySelectorAll('.job-card');
            let interviewCount = 0;
            let rejectedCount = 0;

            for (let i = 0; i < allCards.length; i++) {
                const statusBtn = allCards[i].querySelector('.status-buttons button');
                const status = statusBtn.textContent.trim();
                if (status === 'Interview') interviewCount++;
                if (status === 'Rejected') rejectedCount++;
            }

            totalCountEl.textContent = allCards.length;
            interviewCountEl.textContent = interviewCount;
            rejectedCountEl.textContent = rejectedCount;
            availableCountEl.textContent = allCards.length;
        }

        function checkNoJobs() {
            const allCards = document.querySelectorAll('.job-card');
            let visibleCount = 0;
            for (let i = 0; i < allCards.length; i++) {
                if (allCards[i].style.display !== 'none') visibleCount++;
            }
            noJobsEl.style.display = visibleCount === 0 ? 'block' : 'none';
        }

       function filterCards(type) {
    const allCards = document.querySelectorAll('.job-card');
    let visibleCount = 0;

    for (let i = 0; i < allCards.length; i++) {
        const statusBtn = allCards[i].querySelector('.status-buttons button');
        const currentStatus = statusBtn.textContent.trim();

        if (type === 'all') {
            allCards[i].style.display = 'block';
            visibleCount++;
        } else if (type === 'interview') {
            if (currentStatus === 'Interview') {
                allCards[i].style.display = 'block';
                visibleCount++;
            } else {
                allCards[i].style.display = 'none';
            }
        } else if (type === 'rejected') {
            if (currentStatus === 'Rejected') {
                allCards[i].style.display = 'block';
                visibleCount++;
            } else {
                allCards[i].style.display = 'none';
            }
        }
    }

    availableCountEl.textContent = visibleCount;
    checkNoJobs();
}

        btnAll.addEventListener('click', function () {
            btnAll.className = 'btn btn-info';
            btnInterview.className = 'btn btn-soft text-[#403f3f]';
            btnRejected.className = 'btn btn-soft text-[#403f3f]';
            filterCards('all');
        });

        btnInterview.addEventListener('click', function () {
            btnInterview.className = 'btn btn-info';
            btnAll.className = 'btn btn-soft text-[#403f3f]';
            btnRejected.className = 'btn btn-soft text-[#403f3f]';
            filterCards('interview');
        });

        btnRejected.addEventListener('click', function () {
            btnRejected.className = 'btn btn-info';
            btnAll.className = 'btn btn-soft text-[#403f3f]';
            btnInterview.className = 'btn btn-soft text-[#403f3f]';
            filterCards('rejected');
        });

        // Status Buttons
        const statusButtons = document.querySelectorAll('.status-buttons');

        for (let i = 0; i < statusButtons.length; i++) {
            const buttons = statusButtons[i].querySelectorAll('button');

            buttons[1].addEventListener('click', function () {
                buttons[0].textContent = 'Interview';
                buttons[0].className = 'btn btn-soft btn-accent my-3';
                updateCounts();
            });

            buttons[2].addEventListener('click', function () {
                buttons[0].textContent = 'Rejected';
                buttons[0].className = 'btn btn-soft btn-error my-3';
                updateCounts();
            });
        }

        // Trash Buttons
        const trashButtons = document.querySelectorAll('.trash-btn');

        for (let i = 0; i < trashButtons.length; i++) {
            trashButtons[i].addEventListener('click', function () {
                trashButtons[i].closest('.job-card').remove();
                updateCounts();
                checkNoJobs();
            });
        }
     
