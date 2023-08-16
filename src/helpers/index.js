

export const Observe = (ref, isVisible, setState) => {
    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            setState(true);
            observer.unobserve(ref.current); 
        }
    });

    if (!isVisible) {
        observer.observe(ref.current);
    }
}

