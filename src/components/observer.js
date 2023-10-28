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



