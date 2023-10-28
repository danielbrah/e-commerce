// let target

// const options = {
//     root: null,
//     rootMargin: '-112px',
// }

// const obs = new IntersectionObserver(entries => {
//     if(entries[0].isIntersecting) target.classList.add('active')
//     else target.classList.remove('active')
// }, options)

// export function observer(e, t){
//     obs.observe(e)
//     target = t
// }

// export function unobserve()
// {
//    obs.disconnect();
//    target.classList.remove('active')
//    target = null
// }

export default class Observer { 
    _observer 

    _options = {
        root: null,
        rootMargin: '-112px',
    }

    constructor(el, target){
        this.el = el
        this.target = target
        this._createObserver(el, target)
    }

    _createObserver(e, t)
    {
        this._observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) t.classList.add('active')
            else t.classList.remove('active')
        }, this._options)

        this._observer.observe(e)
    }

    cleanup(){
        this._observer.disconnect()
        this.target.classList.remove('active')
        this._observer = null
    }
}



