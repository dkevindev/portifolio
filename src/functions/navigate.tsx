export const handleNavigate = (tipo: string) => {
    switch (tipo) {
        case 'whatsapp':
            window.open('https://wa.me/5585998266634?text=Ol%C3%A1%20,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20dos%20seus%20servi%C3%A7os%20', '_blank')
            break;
        case 'instagram':
            window.open('https://www.instagram.com/dkcod_e/', '_blank')
            break;
    }
}