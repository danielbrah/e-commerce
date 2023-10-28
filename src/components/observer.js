let target

const options = {
    root: null,
    rootMargin: '-112px',
}

const obs = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting) target.classList.add('active')
    else target.classList.remove('active')
}, options)

export function observer(e, t){
    obs.observe(e)
    target = t
}

export function unobserve()
{
   obs.disconnect();
   target.classList.remove('active')
   target = null
}



