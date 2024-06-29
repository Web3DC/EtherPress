// Description: Site information constants.
export const SITE_NAME = "ePress";
export const SITE_LOGO = "/resources/web3dc-clear.png";
export const MENU_ITEMS = [
    { 
        label: "Home", 
        href: "/",
        icon: "/resources/icons8-home.svg",
        public: true,
        memberOnly: false,
        writerOnly: false,
        adminOnly: false,
    },
    { 
        label: "Editor Dashboard", 
        href: "/editor-dashboard",
        icon: "/resources/icons8-dashboard.svg",
        public: false,
        memberOnly: false,
        writerOnly: true,
        adminOnly: false,
    },
    { 
        label: "Admin Dashboard", 
        href: "/admin-dashboard",
        icon: "/resources/icons8-dashboard.svg",
        public: false,
        memberOnly: false,
        writerOnly: false,
        adminOnly: true,
    },
    { 
        label: "About Us", 
        href: "/about",
        icon: "/resources/icons8-about-us.svg",
        public: true,
        memberOnly: false,
        writerOnly: false,
        adminOnly: false,
    },
    { 
        label: "Contact Us", 
        href: "/contact",
        icon: "/resources/icons8-contact-us.svg",
        public: true,
        memberOnly: false,
        writerOnly: false,
        adminOnly: false,
    },
];