export default class Observer { 
    _observer 

    constructor(el, target = null, options = {root: null, rootMargin: '-112px'}){
        this.el = el
        this.target = target
        this.options = options

        this._createObserver(el, target)
    }

    _createObserver(e, t)
    {
        this._observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) t !== null ? t.classList.add('active') : e.classList.add('active')
            else t !== null ? t.classList.remove('active') : e.classList.remove('active')
        }, this.options)

        this._observer.observe(e)
    }

    cleanup(){
        this._observer.disconnect()
        this.target.classList.remove('active')
        this._observer = null
    }
}



