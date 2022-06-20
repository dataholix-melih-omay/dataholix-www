(function() {
    const policyId= "policy";
    const impressId= "impress";
    const policyContentId = "policy-content";
    const impressContentId = "impress-content";
    
    const clickEvent = "click";
    const selectClass = "select"
    const visibilityClassName = "invisible";

    const elementPolicy = document.getElementById(policyId);
    const elementImpress = document.getElementById(impressId);
    
    const elementContentPolicy = document.getElementById(policyContentId);
    const elementContentImpress = document.getElementById(impressContentId);

    elementPolicy.addEventListener(clickEvent, togglePolicy);
    elementImpress.addEventListener(clickEvent, toggleImpress);

    function togglePolicy(e) {
        elementPolicy.classList.toggle(selectClass);
        elementImpress.classList.remove(selectClass);

        elementContentPolicy.classList.toggle(visibilityClassName);
        elementContentImpress.classList.add(visibilityClassName);
    }
    function toggleImpress(e) {
        elementImpress.classList.toggle(selectClass);
        elementPolicy.classList.remove(selectClass);

        elementContentImpress.classList.toggle(visibilityClassName);
        elementContentPolicy.classList.add(visibilityClassName);
    }
}());