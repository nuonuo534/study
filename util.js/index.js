

function forwardRef() {
  return function (Component) {
    class ForwardRef extends React.Component {
      render() {
        const { forwardedRef } = this.props;
        return <Component ref={forwardedRef} {...this.props} />;
      }
    }

    return React.forwardRef((props, ref) => {
      return <ForwardRef {...props} forwardRef={ref} />;
    });
  };
}

