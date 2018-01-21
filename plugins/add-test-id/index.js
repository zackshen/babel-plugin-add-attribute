
var TEST_ID = 'id'
var PREFIX = 'test-'
var genId = (() => {
    var c = 0
    return () => {
        c++
        return "" + c
    }
})()

module.exports = function({types: t}) {
    function createAttribute(name) {
        return t.jSXAttribute(t.jSXIdentifier(TEST_ID), t.stringLiteral(name));
    }
    return {
        visitor: {
            JSXOpeningElement: function (node, state) {
                var nodeAttributes = node.node.attributes
                var matchComponents = state.opts.matchComponents || []
                var elementName = node.node.name.name
                //console.log("#########3", node.node.name)

                const hasDataAttribute = nodeAttributes.some((attribute) => (
                    t.isJSXIdentifier(attribute.name, { name: TEST_ID })
                ));
                if (hasDataAttribute) { return; }

                if (matchComponents.indexOf(elementName) > -1) {
                    var value = PREFIX + genId()
                    console.log(value)
                    if (value === 'test-4') {
                        console.log(node.parent)
                    }
                    nodeAttributes.push(createAttribute(value))
                }
            }
        }
    }
}