/// <reference path='fourslash.ts' />

// @Filename: functionDecl.ts
////function /*0*/foo/*1*/(/*2*/) /*3*/{ /*4*/}

test.markers().forEach((marker) => {
    goTo.position(marker.position);
    verify.noDocCommentScaffolding();
});
