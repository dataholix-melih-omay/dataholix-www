(function() {
    const policyId= "policy";
    const impressId= "impress";
    const clickEvent = "click";
    const selectClass = "select"
    const visibilityClassName = "invisible";
    
    const elementPolicy = document.getElementById(policyId);
    const elementImpress = document.getElementById(impressId);
    
    const elementPolicyClassList = elementPolicy.nextElementSibling.classList;
    const elementImpressClassList = elementImpress.nextElementSibling.classList;

    function togglePolicy(e) {
        elementPolicyClassList.toggle(visibilityClassName);
        elementPolicy.classList.toggle(selectClass);
        elementImpressClassList.add(visibilityClassName);
        elementImpress.classList.remove(selectClass);

    }

    function toggleImpress(e) {
        elementImpressClassList.toggle(visibilityClassName);
        elementImpress.classList.toggle(selectClass);
        elementPolicyClassList.add(visibilityClassName);
        elementPolicy.classList.remove(selectClass);
    }

    elementPolicy.addEventListener(clickEvent, togglePolicy);
    elementImpress.addEventListener(clickEvent, toggleImpress);

}());
