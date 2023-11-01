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
        this._observer = new IntersectionObserver((entries, observer) => {
            if(!t)
            {
                if (entries[0].isIntersecting)
                {
                    this.el.classList.add('active')
                    observer.unobserve(e)
                }
            }
            else
            {
                if(entries[0].isIntersecting) t.classList.add('active')
                else t.classList.remove('active')
            }
        }, this.options)

        this._observer.observe(e)
    }

    cleanup(){
        this._observer.disconnect()
        !this.target ? this.el.classList.remove('active') : this.target.classList.remove('active')
        this._observer = null
    }
}



