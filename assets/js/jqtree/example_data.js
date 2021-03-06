$(function() {
    // demo tree
    var data = [{
        label: 'node1',
        id: 1,
        children: [{
            label: 'child1',
            id: 2
        }, {
            label: 'child2',
            id: 3
        }, {
            label: 'child3',
            id: 4
        }, {
            label: 'child4',
            id: 5,
            children: [{
                label: 'sub child1',
                id: 6
            }, {
                label: 'sub child2',
                id: 7
            }, {
                label: 'sub child3',
                id: 8
            }, {
                label: 'sub child4',
                id: 9
            }]
        }, {
            label: 'child5',
            id: 10
        }, {
            label: 'child6',
            id: 11
        }]
    }, {
        label: 'node2',
        id: 12,
        children: [{
            label: 'child7',
            id: 13
        }, {
            label: 'child8',
            id: 14
        }, {
            label: 'child9',
            id: 15
        }, {
            label: 'child10',
            id: 16
        }, {
            label: 'child11',
            id: 17,
            children: [{
                label: 'sub child1',
                id: 18
            }, {
                label: 'sub child2',
                id: 19
            }, {
                label: 'sub child3',
                id: 20
            }, {
                label: 'sub child4',
                id: 21
            }, {
                label: 'sub child5',
                id: 22
            }, {
                label: 'sub child6',
                id: 23,
                children: [{
                    label: 'Super sub child1',
                    id: 24
                }, {
                    label: 'Super sub child2',
                    id: 25
                }, {
                    label: 'Super sub child3',
                    id: 26
                }, {
                    label: 'Super sub child4',
                    id: 27
                }, {
                    label: 'Super sub child5',
                    id: 28
                }, {
                    label: 'Super sub child6',
                    id: 29
                }]
            }]
        }]
    }];

    var $tree1 = $('#tree1');

    $tree1.tree({
        data: data,
        autoOpen: true,
        dragAndDrop: true
    });
});