import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import eu from './assets/eu.jpg';
import senac_logo from './assets/logosenac.png';
import upe_logo from './assets/logoupe.png';
import unifesp_logo from './assets/logounifesp.png';
import portoDigital_logo from './assets/logoportodigital.png';
import facepe_logo from './assets/logofacepe.png';
import smart_logo from './assets/logo-smartfit.png';
import acto_logo from './assets/logoacto.jpeg';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';

const openGitHub = () => {
  const url = 'https://github.com/jessica-espindola';
  Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
};

const openLinkedin = () => {
  const url = 'https://www.linkedin.com/in/j%C3%A9ssica-esp%C3%ADndola-bb489698/';
  Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
};

const PaginaInicial = () => {
  return (
    <View style={styles.pagina}>
      <Image source={eu} style={styles.bannerMinhaFoto}></Image>
      <Text style={styles.tituloPaginaInicial}>Seja Bem vindo(a)</Text>
      <Text style={styles.textoPaginaInicial}>Essa é minha página de currículo online, desenvolvida na disciplina de Mobile, utilizando React Native.Aqui você encontrará minhas informações acadêmicas, minhas experiências de trabalho e meus canais de contato.</Text>
      <Text style={styles.textoPaginaInicial}>Confira os conteúdos no menu inferior ou no menu superior.</Text>
    </View>
  );
};

const Pagina1 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.tituloPagina}>Formação Acadêmica</Text>
      <View style ={styles.boxFormacao}>
        <View style={styles.boxFormacaoLeft}>
          <Image source={unifesp_logo} style={styles.logoInstituicao}></Image>
        </View>
        <View style={styles.boxFormacaoRight}>
          <Text style={styles.textoPaginaTitulo}>Pós-Graduanda em Informática em Saúde</Text>
          <Text style={styles.textoPagina}>Universidade Federal de São Paulo - UNIFESP/UAB</Text>
          <Text style={styles.textoPagina}>Outubro de 2023 - até o momento</Text>
        </View>
      </View>
      <View style ={styles.boxFormacao}>
        <View style={styles.boxFormacaoLeft}>
          <Image source={senac_logo} style={styles.logoInstituicao}></Image>
        </View>
        <View style={styles.boxFormacaoRight}>
          <Text style={styles.textoPaginaTitulo}>Graduanda em Tecnologia em Análise e Desenvolvimento de Sistemas</Text>
          <Text style={styles.textoPagina}>Faculdade SENAC - Pernambuco</Text>
          <Text style={styles.textoPagina}>Fevereiro de 2023 - até o momento</Text>
        </View>
      </View>
      <View style ={styles.boxFormacao}>
        <View style={styles.boxFormacaoLeft}>
          <Image source={upe_logo} style={styles.logoInstituicao}></Image>
        </View>
        <View style={styles.boxFormacaoRight}>
          <Text style={styles.textoPaginaTitulo}>Bacharel em Educação Física</Text>
          <Text style={styles.textoPagina}>Escola Superior de Educação Física - ESEF/UPE</Text>
          <Text style={styles.textoPagina}>Agosto de 2012 - Fevereiro de 2017</Text>
        </View>
      </View>
    </View>
  );
};

const Pagina2 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.tituloPagina}>Experiências Profissionais</Text>
      <View style ={styles.boxFormacao}>
        <View style={styles.boxFormacaoLeft}>
          <Image source={portoDigital_logo} style={styles.logoInstituicao} resizeMode='contain'></Image>
        </View>
        <View style={styles.boxFormacaoRight}>
          <Text style={styles.textoPaginaTitulo}>Residente em Software</Text>
          <Text style={styles.textoPagina}>Parceria entre Porto Digital e Faculdade SENAC</Text>
          <Text style={styles.textoPagina}>Agosto de 2023 - até o momento</Text>
        </View>
      </View>
      <View style ={styles.boxFormacao}>
        <View style={styles.boxFormacaoLeft}>
          <Image source={acto_logo} style={styles.logoInstituicao} resizeMode='contain'></Image>
        </View>
        <View style={styles.boxFormacaoRight}>
          <Text style={styles.textoPaginaTitulo}>Coordenadora Técnica</Text>
          <Text style={styles.textoPagina}>Acto Academia</Text>
          <Text style={styles.textoPagina}>Janeiro de 2023 - Junho de 2023</Text>
        </View>
      </View>
      <View style ={styles.boxFormacao}>
        <View style={styles.boxFormacaoLeft}>
          <Image source={facepe_logo} style={styles.logoInstituicao} resizeMode='contain'></Image>
        </View>
        <View style={styles.boxFormacaoRight}>
          <Text style={styles.textoPaginaTitulo}>Bolsista Desenvolvedora</Text>
          <Text style={styles.textoPagina}>Fundação de Amparo a Ciência e Tecnologia do Estado de Pernambuco - FACEPE</Text>
          <Text style={styles.textoPagina}>Janeiro de 2023 - Abril de 2023</Text>
        </View>
      </View>
      <View style ={styles.boxFormacao}>
        <View style={styles.boxFormacaoLeft}>
          <Image source={smart_logo} style={styles.logoInstituicao} resizeMode='contain' backgroundColor='black'></Image>
        </View>
        <View style={styles.boxFormacaoRight}>
          <Text style={styles.textoPaginaTitulo}>Instrutora de Atividade Física</Text>
          <Text style={styles.textoPagina}>SMARTFIT Academia</Text>
          <Text style={styles.textoPagina}>Dezembro de 2019 - Junho de 2022</Text>
        </View>
      </View>
    </View>
  );
};

const Pagina3 = () => {

  return (
    <View style={styles.pagina}>
      <Text style={styles.tituloPagina}>Contato</Text>
      <TouchableOpacity style={styles.button} onPress={openGitHub}>
        <Image source={github} style={styles.gitlinkedin} resizeMode='contain'></Image>
        <Text style={styles.buttonText}>Visite meu GitHub</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={openLinkedin}>
      <Image source={linkedin} style={styles.gitlinkedin} resizeMode='contain'></Image>
        <Text style={styles.buttonText}>Visite meu Linkedin</Text>
      </TouchableOpacity>
      <Text style={styles.textoPagina3Titulo}>E-mail:</Text>
      <Text style={styles.textoPagina3Conteudo}>jessica.almeida@edu.pe.senac.br</Text>
    </View>
  );
};

const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Página 1':
        return <Pagina1 />;
      case 'Página 2':
        return <Pagina2 />;
      case 'Página 3':
        return <Pagina3 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Meu Currículo</Text>
        <TouchableOpacity onPress={toggleMenu} >
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuAberto && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
            <Text style={styles.menuItemText}>Página Inicial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 1')}>
            <Text style={styles.menuItemText}>Formação Acadêmica</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 2')}>
            <Text style={styles.menuItemText}>Experiências Profissionais</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 3')}>
            <Text style={styles.menuItemText}>Contato</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>

      {/* Menu Inferior */}
      <View style={styles.menuInferior}>
        <Text onPress={ () => navegarPara('Página Inicial')}>
          <View style={styles.circuloBtn}><Icon style={styles.menuInferiorItem} name="home" ></Icon></View>
        </Text>
        <Text style={styles.menuInferiorItem} onPress={ () => navegarPara('Página 1')}>
          <View style={styles.circuloBtn}><Icon  style={styles.menuInferiorItem} name="school"></Icon></View>
        </Text>
        <Text style={styles.menuInferiorItem} onPress={ () => navegarPara('Página 2')}>
          <View style={styles.circuloBtn}><Icon  style={styles.menuInferiorItem} name="work-history"></Icon></View>
        </Text>
        <Text style={styles.menuInferiorItem} onPress={ () => navegarPara('Página 3')}>
          <View style={styles.circuloBtn}><Icon  style={styles.menuInferiorItem} name="contacts"></Icon></View>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#339188',
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  menuIcon: {
    padding: 10,
    fontSize: 30,
    color: '#FFFFFF',
  },
  bannerMinhaFoto: {
    width: 400,
    height: 200,
    marginBottom: 40,
    top: 0,
    position: 'absolute',
  },
  tituloPaginaInicial: {
    fontWeight: '700',
  },
  textoPaginaInicial: {
    fontStyle: 'italic',
    paddingHorizontal: 30,
    paddingTop: 15,
    textAlign: 'justify',
  },
  menu: {
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tituloPagina: {
    fontWeight: '700',
    fontSize: 23,
    textTransform: 'uppercase',
    paddingBottom: 40,
  },
  textoPaginaTitulo: {
    fontSize: 18,
    fontWeight: '500',
  },
  textoPagina: {
    fontSize: 15,
    fontStyle: 'italic',
  },
  boxFormacao: {
    textAlign: 'left',
    flexDirection: 'row',
    paddingLeft: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logoInstituicao: {
    width: 'auto',
    height: 60,
  },
  boxFormacaoLeft: {
    width: 80,
  },
  boxFormacaoRight: {
    marginLeft: 20,
    paddingRight: 40,
  },
  menuInferior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    Bottom: 0,
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  circuloBtn: {
    backgroundColor: '#339188',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 100,
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    zIndex: 1,
  },
  menuInferiorItem: {
    fontSize: 30,
    color: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 100,
  },
  button: {
    backgroundColor: '#339188',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  gitlinkedin: {
    width: 20,
    height: 20,
  },
  textoPagina3Titulo: {
    fontWeight: '500',
    paddingVertical: 15,
  },
  textoPagina3Conteudo: {
    fontStyle: 'italic',
  }
});

export default App;
