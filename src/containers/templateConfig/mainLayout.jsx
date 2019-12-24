import { connect } from 'react-redux';
import MainLayout from '../../layout/mainLayout/';
import { configBlock } from '../../redux/actions/templateConfig/';

const preBuild = (layout) => {

  if (layout === "layout-2") {
    document.body.classList.add("layout-2")
  } else {
    document.body.classList.remove("layout-2")
  }
  if (layout === "layout-3") {
    document.body.classList.add("layout-3")
  } else {
    document.body.classList.remove("layout-3")
  }
  if (layout === "layout-4") {
    document.body.classList.add("layout-4")
  } else {
    document.body.classList.remove("layout-4")
  }
  if (layout === "layout-5") {
    document.body.classList.add("layout-5")
  } else {
    document.body.classList.remove("layout-5")
  }
  if (layout === "layout-6") {
    document.body.classList.add("layout-6")
  } else {
    document.body.classList.remove("layout-6")
  }
  if (layout === "layout-7") {
    document.body.classList.add("layout-7")
  } else {
    document.body.classList.remove("layout-7")
  }
  if (layout === "layout-8") {
    document.body.classList.add("layout-8")
  } else {
    document.body.classList.remove("layout-8")
  }
  if (layout === "layout-9") {
    document.body.classList.add("layout-9")
  } else {
    document.body.classList.remove("layout-9")
  }
  if (layout === "layout-10") {
    document.body.classList.add("layout-10")
  } else {
    document.body.classList.remove("layout-10")
  }
  if (layout === "layout-11") {
    document.body.classList.add("layout-11")
  } else {
    document.body.classList.remove("layout-11")
  }
  if (layout === "layout-12") {
    document.body.classList.add("layout-12")
  } else {
    document.body.classList.remove("layout-12")
  }
  return layout
}

const mapStateToProps = state => ({
  layout: state.config.layout,
  templetConfigBlock: state.config.configBlock,
  prebuildLayout: preBuild(state.config.prebuildLayout),
})

const mapDispatchToProps = {
  configBlock
}


export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
