class AutoPetUsageMixin extends Observer{
    constructor(){
        super();
    }

    handlePetUpdate(){
        const KAMI_GEAR_ID = PetActions.GEAR_ACTIONS['KAMI'];

        if (window.hero.pet.timerGearStatuses[KAMI_GEAR_ID])
            window.hero.pet.reviveAndSetGear(KAMI_GEAR_ID);
    }

    handleNotify(){
        this.handlePetUpdate();
    }
}