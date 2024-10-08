const services = {
    notary: [
        { id: 1, name: "Pembuatan Akta Yayasan", requirements: ["identitas Diri (KTP)", "\nAkta Pendiri Yayasan"] },
        { id: 2, name: "Pembuatan Akta PT", requirements: ["Identitas Diri (KTP)", "\nAnggaran Dasar"] },
        { id: 3, name: "Pembuatan Akta CV", requirements: ["Identitas Diri (KTP)", "\nData Pemilik"] },
        { id: 4, name: "Pembuatan Akta Perkumpulan", requirements: ["Identitas Diri (KTP)", "\nData Anggota"] },
    ],
    ppat: [
        { id: 5, name: "Pembuatan SKMHT", requirements: ["Identitas Diri (KTP)", "\nData Tanah"] },
        { id: 6, name: "Pembuatan APHT", requirements: ["Identitas Diri (KTP)", "\nDokumen Jaminan"] },
        { id: 7, name: "Pembuatan AJB", requirements: ["Identitas Diri (KTP)", "\nSertifikat Tanah"] },
        { id: 8, name: "Pembuatan Akta Hibah", requirements: ["Identitas Diri (KTP)", "\nSertifikat Tanah"] },
        { id: 9, name: "Pembuatan Akta Waris", requirements: ["Identitas Diri (KTP)", "\nDokumen Waris"] },
    ],
     lainnya: [
        { id: 10, name: "Pengecekan Sertifikat", requirements: ["Identitas Diri (KTP)", "\nData Tanah"] },
        { id: 11, name: "Roya", requirements: ["Identitas Diri (KTP)", "\nDokumen Jaminan"] },
        { id: 12, name: "Bailk Nama Sertifikat", requirements: ["Identitas Diri (KTP)", "\nSertifikat Tanah"] },
        { id: 13, name: "Pengurusan Perpajakan", requirements: ["Identitas Diri (KTP)", "\nSertifikat Tanah"] },
        { id: 14, name: "Perijinan Perusahaan", requirements: ["Identitas Diri (KTP)", "\nDokumen Waris"] },
    ]
};

function updateServices() {
    const category = document.getElementById('service-category').value;
    const serviceSelect = document.getElementById('service-select');
    
    // Clear previous options
    serviceSelect.innerHTML = '<option value="">Pilih Layanan</option>';
    
    if (category) {
        const availableServices = services[category];
        availableServices.forEach(service => {
            const option = document.createElement('option');
            option.value = service.id;
            option.textContent = service.name;
            serviceSelect.appendChild(option);
        });
    }
}

function showRequirements() {
    const serviceSelect = document.getElementById('service-select');
    const requirementsSection = document.getElementById('requirements-section');
    const requirementsList = document.getElementById('requirements-list');

    // Clear previous requirements
    requirementsList.innerHTML = '';

    if (serviceSelect.value) {
        const selectedService = services[document.getElementById('service-category').value]
            .find(service => service.id == serviceSelect.value);

        selectedService.requirements.forEach(requirement => {
            const listItem = document.createElement('li');
            listItem.textContent = requirement;
            requirementsList.appendChild(listItem);
        });

        requirementsSection.style.display = 'block';
    } else {
        requirementsSection.style.display = 'none';
    }
}

function submitRequirements() {
    const serviceSelect = document.getElementById('service-select');
    const selectedService = services[document.getElementById('service-category').value]
        .find(service => service.id == serviceSelect.value);

    if (selectedService) {
        const requirements = selectedService.requirements.join(', ');
        const message = `Layanan: ${selectedService.name}\nPersyaratan: ${requirements}\nPermohonan telah dikirim!`;

        // Replace 'YOUR_PHONE_NUMBER' with your actual WhatsApp number (in international format)
        const whatsappNumber = '+6281321245011';
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(whatsappLink, '_blank');
    } else {
        alert('Silakan pilih layanan yang valid.');
    }
}

