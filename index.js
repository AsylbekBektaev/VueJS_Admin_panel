
const Counter = {
    data() {
        return {
            OperatorsBlock:true,
            TerminalsBlock:false,
            CollectionBlock:false,
            UpravBlock:false,
            OtchetBlock:false,
            SpravochnikBlock:false
        }
    },
    methods: {
        ClickHeader(event) {
            if(event){
                var target=event.target;
            }
            this.OperatorsBlock = false;
            this.TerminalsBlock = false;
            this.CollectionBlock = false;
            this.UpravBlock = false;
            this.OtchetBlock = false;
            this.SpravochnikBlock = false;

            var itemsNavbar=document.querySelectorAll('header ul .item');
            if(itemsNavbar){
                for(let i=0;i<itemsNavbar.length;i++){
                    itemsNavbar[i].style.color="black";
                }
            }

            if(target.id === 'Spravochnik'){
                this.SpravochnikBlock=true;
                target.style.cssText="color: #9CB7EB;";
                this.OperatorsBlock = false;
                this.TerminalsBlock = false;
                this.CollectionBlock = false;
                this.UpravBlock = false;
                this.OtchetBlock = false;
            }else if(target.id === 'Otchet'){
                this.OtchetBlock=true;
                target.style.cssText="color: #9CB7EB;";
                this.OperatorsBlock = false;
                this.TerminalsBlock = false;
                this.CollectionBlock = false;
                this.UpravBlock = false;
                this.SpravochnikBlock = false;
            }else if(target.id === 'Uprav'){
                this.UpravBlock=true;
                target.style.cssText="color: #9CB7EB;";
                this.OperatorsBlock = false;
                this.TerminalsBlock = false;
                this.CollectionBlock = false;
                this.OtchetBlock = false;
                this.SpravochnikBlock = false;
            }else if(target.id === 'Collection'){
                this.CollectionBlock=true;
                target.style.cssText="color: #9CB7EB;";
                this.OperatorsBlock = false;
                this.TerminalsBlock = false;
                this.UpravBlock = false;
                this.OtchetBlock = false;
                this.SpravochnikBlock = false;
            }else if(target.id === 'Terminals'){
                this.TerminalsBlock=true;
                target.style.cssText="color: #9CB7EB;";
                this.OperatorsBlock = false;
                this.CollectionBlock = false;
                this.UpravBlock = false;
                this.OtchetBlock = false;
                this.SpravochnikBlock = false;
            }else if(target.id === 'Operators'){
                this.OperatorsBlock=true;
                target.style.cssText="color: #9CB7EB;";
                this.TerminalsBlock = false;
                this.CollectionBlock = false;
                this.UpravBlock = false;
                this.OtchetBlock = false;
                this.SpravochnikBlock = false;
            }
        },
    }
}

Vue.createApp(Counter).mount('#app')