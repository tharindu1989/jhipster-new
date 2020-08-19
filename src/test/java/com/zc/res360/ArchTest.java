package com.zc.res360;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.zc.res360");

        noClasses()
            .that()
                .resideInAnyPackage("com.zc.res360.service..")
            .or()
                .resideInAnyPackage("com.zc.res360.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..com.zc.res360.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
